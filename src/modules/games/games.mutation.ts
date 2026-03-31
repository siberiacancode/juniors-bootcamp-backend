import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { UsersService } from '@/modules/users';
import { BaseResolver } from '@/utils/services';

import { CreateGameOrderDto } from './dto';
import { CreateGameOrderResponse } from './games.model';
import { GamesService } from './games.service';
import { GameOrderService, GameOrderStatus } from './modules';

@Resolver('🎮 games mutation')
@Resolver()
export class GamesMutation extends BaseResolver {
  constructor(
    private readonly gamesService: GamesService,
    private readonly gameOrderService: GameOrderService,
    private readonly usersService: UsersService
  ) {
    super();
  }

  @Mutation(() => CreateGameOrderResponse)
  async createGameOrder(
    @Args() createGameOrderDto: CreateGameOrderDto
  ): Promise<CreateGameOrderResponse> {
    const game = this.gamesService.getGame(createGameOrderDto.gameId);

    if (!game) {
      throw new BadRequestException(this.wrapFail('Игра не найдена'));
    }

    let user = await this.usersService.findOne({ phone: createGameOrderDto.person.phone });

    if (!user) {
      user = await this.usersService.create({ phone: createGameOrderDto.person.phone });
    }

    await this.usersService.findOneAndUpdate(
      { phone: user.phone },
      {
        $set: {
          firstname: createGameOrderDto.person.firstName,
          lastname: createGameOrderDto.person.lastName,
          middlename: createGameOrderDto.person.middleName,
          email: createGameOrderDto.person.email
        }
      }
    );

    const order = await this.gameOrderService.create({
      person: createGameOrderDto.person,
      gameSnapshot: {
        gameId: game.id,
        name: game.name,
        image: game.image,
        price: game.price,
        externalId: game.externalId
      },
      gameKey: this.generateGameKey(),
      status: GameOrderStatus.PAID
    });

    return this.wrapSuccess({ order });
  }

  private generateGameKey(): string {
    const randomChunk = () => Math.random().toString(36).slice(2, 6).toUpperCase();
    return `${randomChunk()}-${randomChunk()}-${randomChunk()}-${randomChunk()}`;
  }
}
