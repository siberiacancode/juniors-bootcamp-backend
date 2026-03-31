import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { BaseResponse } from '@/utils/services';

import { Game, GamesPaginationMeta } from './entities';
import { GameOrder } from './modules';

@ObjectType()
export class GamesPaginatedResponse extends BaseResponse {
  @Field(() => [Game])
  @ApiProperty({ description: 'Список игр', type: [Game] })
  data: Game[];

  @Field(() => GamesPaginationMeta)
  @ApiProperty({ description: 'Пагинация', type: GamesPaginationMeta })
  meta: GamesPaginationMeta;
}

@ObjectType()
export class GameResponse extends BaseResponse {
  @Field(() => Game)
  @ApiProperty({ description: 'Игра', type: Game })
  data: Game;
}

@ObjectType()
export class GameAutocompleteResponse extends BaseResponse {
  @Field(() => [Game])
  @ApiProperty({ description: 'Результаты автокомплита', type: [Game] })
  data: Game[];
}

@ObjectType()
export class CreateGameOrderResponse extends BaseResponse {
  @Field(() => GameOrder)
  @ApiProperty({ description: 'Заказ на игру', type: GameOrder })
  order: GameOrder;
}

@ObjectType()
export class GameBuyResponse extends CreateGameOrderResponse {}

@ObjectType()
export class GameOrdersResponse extends BaseResponse {
  @Field(() => [GameOrder])
  @ApiProperty({ description: 'Заказы пользователя', type: [GameOrder] })
  orders: GameOrder[];
}

@ObjectType()
export class GameOrderResponse extends BaseResponse {
  @Field(() => GameOrder)
  @ApiProperty({ description: 'Заказ', type: GameOrder })
  order: GameOrder;
}
