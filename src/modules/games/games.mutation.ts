import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { UsersService } from '@/modules/users';
import { BaseResolver } from '@/utils/services';

import { BuyGameDto } from './dto';
import { GameBuyResponse } from './games.model';
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

  @Mutation(() => GameBuyResponse)
  async buyGame(@Args() buyGameDto: BuyGameDto): Promise<GameBuyResponse> {
    const game = this.gamesService.getGame(buyGameDto.gameId);

    if (!game) {
      throw new BadRequestException(this.wrapFail('Игра не найдена'));
    }

    let user = await this.usersService.findOne({ phone: buyGameDto.person.phone });

    if (!user) {
      user = await this.usersService.create({ phone: buyGameDto.person.phone });
    }

    await this.usersService.findOneAndUpdate(
      { phone: user.phone },
      {
        $set: {
          firstname: buyGameDto.person.firstName,
          lastname: buyGameDto.person.lastName,
          middlename: buyGameDto.person.middleName,
          email: buyGameDto.person.email
        }
      }
    );

    const order = await this.gameOrderService.create({
      person: buyGameDto.person,
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
