import type { FastifyReply } from 'fastify';

import { Res } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { ClientType, Session, SessionsService } from '@/modules/sessions';
import { BaseResponse } from '@/utils/base';
import { Client, CurrentSession } from '@/utils/decorators';
import { AuthorizedOnly } from '@/utils/guards';
import { Result } from '@/utils/helpers';

import { AuthService } from './auth.service';
import { SignInDto } from './dto';
import { SignInResponse } from './responses';

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
    @Res({
      passthrough: true
    })
    reply: FastifyReply
  ): Promise<SignInResponse> {
    const response = await this.authService.signIn(signInDto, clientType);

    if (response.token) {
      reply.setCookie('session_token', response.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });
    }

    return response;
  }

  @Mutation(() => SignInResponse)
  @AuthorizedOnly()
  async signOut(
    @CurrentSession() session: Session,
    @Res({ passthrough: true }) reply: FastifyReply
  ): Promise<BaseResponse> {
    await this.sessionsService.deleteById(session._id);

    reply.clearCookie('session_token');

    return Result.success();
  }
}
