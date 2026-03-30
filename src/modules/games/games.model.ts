import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { BaseResponse } from '@/utils/services';

import { Game, PaginationMeta } from './entities';
import { GameOrder } from './modules';

@ObjectType()
export class GamesPaginatedResponse extends BaseResponse {
  @Field(() => [Game])
  @ApiProperty({ description: 'Список игр', type: [Game] })
  data: Game[];

  @Field(() => PaginationMeta)
  @ApiProperty({ description: 'Пагинация', type: PaginationMeta })
  meta: PaginationMeta;
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
export class GameBuyResponse extends BaseResponse {
  @Field(() => GameOrder)
  @ApiProperty({ description: 'Заказ на игру', type: GameOrder })
  order: GameOrder;
}

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
