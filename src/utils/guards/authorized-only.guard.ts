import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  UseGuards
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';

import { SessionsService } from '@/modules/sessions';
import { UsersService } from '@/modules/users';
import { getRequest, Result } from '@/utils/helpers';

@Injectable()
export class AuthorizedOnlyGuard implements CanActivate {
  constructor(
    private readonly sessionsService: SessionsService,
    private readonly usersService: UsersService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = getRequest(context);

    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException(Result.fail('Не авторизован'));
    }

    const session = await this.sessionsService.findById(token);

    if (!session) {
      throw new UnauthorizedException(Result.fail('Не авторизован'));
    }

    const user = await this.usersService.findOne({ _id: session.userId });

    if (!user) {
      throw new BadRequestException(Result.fail('Пользователь не найден'));
    }

    request.user = user;
    request.session = session;

    return true;
  }

  private extractToken(request: FastifyRequest): string | null {
    const cookieToken = request.cookies?.session_token;
    if (cookieToken) return cookieToken;

    const authHeader = request.headers.authorization;
    if (!authHeader) return null;

    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) return null;

    return token;
  }
}

export const AuthorizedOnly = () => UseGuards(AuthorizedOnlyGuard);
