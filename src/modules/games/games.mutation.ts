import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CreateGameOrderDto } from './dto';
import { CreateGameOrderResponse } from './games.model';
import { GamesService } from './games.service';

@Resolver('🎮 games mutation')
export class GamesMutation {
  constructor(private readonly gamesService: GamesService) {}

  @Mutation(() => CreateGameOrderResponse, {
    description: 'Создать заказ игры и транзакцию для оплаты'
  })
  async createGameOrder(
    @Args('input') createGameOrderDto: CreateGameOrderDto
  ): Promise<CreateGameOrderResponse> {
    return this.gamesService.createGameOrder(createGameOrderDto);
  }
}
