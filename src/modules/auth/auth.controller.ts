import type { FastifyReply } from 'fastify';

import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Session, SessionsService } from '@/modules/sessions';
import { BaseResponse } from '@/utils/base';
import { Client, CurrentSession } from '@/utils/decorators';
import { AuthorizedOnly } from '@/utils/guards';
import { Result } from '@/utils/helpers';

import { ClientType } from '../sessions';
import { AuthService } from './auth.service';
import { SignInDto } from './dto';
import { SignInResponse } from './responses';

@ApiTags('🔒 auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,

    private readonly sessionsService: SessionsService
  ) {}

  @ApiHeader({
    example: ClientType.WEB,
    enum: ClientType,
    required: false,
    name: 'x-application'
  })
  @ApiOperation({ summary: 'Войти' })
  @ApiResponse({
    type: SignInResponse,
    description: 'sign-in',
    status: 200
  })
  @Post('/sign-in')
  async signIn(
    @Body() signInDto: SignInDto,
    @Client() clientType: ClientType,
    @Res({
      passthrough: true
    })
    reply: FastifyReply
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

  @ApiHeader({
    example: ClientType.WEB,
    enum: ClientType,
    required: false,
    name: 'x-application'
  })
  @ApiOperation({ summary: 'Выйти' })
  @ApiResponse({
    type: BaseResponse,
    description: 'sign-out',
    status: 200
  })
  @Post('/sign-out')
  @AuthorizedOnly()
  async signOut(
    @CurrentSession() session: Session,
    @Res({ passthrough: true }) reply: FastifyReply
  ): Promise<BaseResponse> {
    await this.sessionsService.deleteById(session._id);

    reply.clearCookie('session_token', {});

    return Result.success();
  }
}
