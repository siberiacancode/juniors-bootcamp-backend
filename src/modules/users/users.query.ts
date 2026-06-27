import type { FastifyRequest } from 'fastify';

import { Context, Query, Resolver } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

import { DescribeContext } from '@/utils/decorators';
import { GqlAuthorizedOnly } from '@/utils/guards';
import { AuthService, BaseResolver } from '@/utils/services';

import { User } from './entities';
import { SessionResponse } from './users.model';
import { UsersService } from './users.service';

@GqlAuthorizedOnly()
@Resolver('💂‍♂️ users query')
@DescribeContext('UsersQuery')
@Resolver(() => User)
export class UsersQuery extends BaseResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {
    super();
  }

  @Query(() => SessionResponse)
  async session(@Context() context: { req: FastifyRequest }): Promise<SessionResponse> {
    const token = context.req.headers.authorization.split(' ')[1];
    const decodedJwtAccessToken = (await this.authService.decode(token)) as User;

    const user = await this.usersService.findOne({
      phone: decodedJwtAccessToken.phone
    });

    if (!user) {
      throw new GraphQLError('Пользователь не найден');
    }

    return this.wrapSuccess({ user });
  }
}
