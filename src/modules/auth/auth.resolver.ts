import type { FastifyReply } from 'fastify';

import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';

import { ClientType, Session, SessionsService } from '@/modules/sessions';
import { BaseResponse } from '@/utils/base';
import { Client, CurrentSession } from '@/utils/decorators';
import { AuthorizedOnly } from '@/utils/guards';
import { Result } from '@/utils/helpers';

import { AuthService } from './auth.service';
import { SignInDto } from './dto';
import { SignInResponse } from './responses';

// TODO fix context

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly sessionsService: SessionsService
  ) {}

  @Mutation(() => SignInResponse)
  async signIn(
    @Args() signInDto: SignInDto,
    @Client() clientType: ClientType,
    @Context('reply') reply: FastifyReply
  ): Promise<SignInResponse> {
    const { token, user } = await this.authService.createSessionToken(signInDto);

    if (clientType === ClientType.WEB) {
      reply.setCookie('session_token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });
    }

    return Result.success({
      user,
      ...(clientType === ClientType.MOBILE && { token })
    });
  }

  @Mutation(() => BaseResponse)
  @AuthorizedOnly()
  async signOut(
    @CurrentSession() session: Session,
    @Client() clientType: ClientType,
    @Context('reply') reply: FastifyReply
  ): Promise<BaseResponse> {
    await this.sessionsService.deleteById(session._id);

    if (clientType === ClientType.WEB) {
      reply.clearCookie('session_token', {
        path: '/'
      });
    }

    return Result.success();
  }
}
