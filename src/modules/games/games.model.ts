import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { BaseResponse } from '@/utils/services';

import { Region } from './constants';
import { DetailedGame, FilteredGame, GamesPaginationMeta, PriceVariant } from './entities';
import { GameOrder } from './modules';

@ObjectType()
export class GamesPaginatedResponse extends BaseResponse {
  @Field(() => [FilteredGame])
  @ApiProperty({ description: 'Список игр', type: [FilteredGame] })
  games: FilteredGame[];

  @Field(() => GamesPaginationMeta)
  @ApiProperty({ description: 'Пагинация', type: GamesPaginationMeta })
  meta: GamesPaginationMeta;
}

@ObjectType()
export class GameResponse extends BaseResponse {
  @Field(() => DetailedGame)
  @ApiProperty({ description: 'Игра', type: DetailedGame })
  game: DetailedGame;
}

@ObjectType()
export class GameSearchResponse extends BaseResponse {
  @Field(() => [FilteredGame])
  @ApiProperty({ description: 'Результаты поиска игр', type: [FilteredGame] })
  games: FilteredGame[];
}

@ObjectType()
export class RegionsResponse extends BaseResponse {
  @Field(() => [Region])
  @ApiProperty({
    description: 'Доступные регионы',
    enumName: 'Region',
    enum: Region,
    isArray: true
  })
  regions: Region[];
}

@ObjectType()
export class PriceVariantsResponse extends BaseResponse {
  @Field(() => [PriceVariant])
  @ApiProperty({ description: 'Варианты цен для изданий', type: [PriceVariant] })
  priceVariants: PriceVariant[];
}

@ObjectType()
export class CreateGameOrderResponse extends BaseResponse {
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
