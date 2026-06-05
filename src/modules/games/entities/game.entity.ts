import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { DeliveryType, GameGenre, Region } from '../constants';

@ObjectType('GamesPaginationMeta')
export class GamesPaginationMeta {
  @Field(() => Number)
  @ApiProperty({ example: 30, description: 'Общее количество элементов' })
  total: number;

  @Field(() => Number)
  @ApiProperty({ example: 1, description: 'Текущая страница' })
  page: number;

  @Field(() => Number)
  @ApiProperty({ example: 10, description: 'Элементов на странице' })
  limit: number;

  @Field(() => Number)
  @ApiProperty({ example: 3, description: 'Количество страниц' })
  totalPages: number;
}

@ObjectType('PriceVariant')
export class PriceVariant {
  @Field(() => Region)
  @ApiProperty({ example: Region.EUROPE, description: 'Регион' })
  region: Region;

  @Field(() => Number)
  @ApiProperty({ example: 968, description: 'Текущая цена' })
  price: number;

  @Field(() => Number, { nullable: true })
  @ApiProperty({ example: 2688, description: 'Старая цена', required: false })
  oldPrice?: number;

  @Field(() => DeliveryType)
  @ApiProperty({ example: DeliveryType.STEAM_KEY, description: 'Способ получения' })
  deliveryType: DeliveryType;

  @Field(() => String)
  @ApiProperty({ example: 'Deluxe edition', description: 'Издание' })
  edition: string;
}

@ObjectType('Game')
export class Game {
  @Field(() => String)
  @ApiProperty({ example: 'battlefield-2042', description: 'Slug игры' })
  slug: string;

  @Field(() => String)
  @ApiProperty({ example: 'Battlefield 2042', description: 'Название игры' })
  name: string;

  @Field(() => String)
  @ApiProperty({ example: '1517290', description: 'Внешний ID (Steam/KupiKod)' })
  externalId: string;

  @Field(() => Number)
  @ApiProperty({ example: 1637280000, description: 'Дата релиза' })
  releaseDate: number;

  @Field(() => [GameGenre])
  @ApiProperty({
    enum: GameGenre,
    enumName: 'GameGenre',
    example: [GameGenre.ACTION, GameGenre.RPG],
    isArray: true,
    description: 'Жанры игры'
  })
  genres: GameGenre[];

  @Field(() => String)
  @ApiProperty({ example: 'Онлайн-шутер с масштабными сражениями.', description: 'Описание игры' })
  description: string;

  @Field(() => String)
  @ApiProperty({ example: '/static/images/games/cs2.webp', description: 'Изображение игры' })
  image: string;

  @Field(() => [PriceVariant])
  @ApiProperty({ description: 'Варианты цен' })
  priceVariants: PriceVariant[];

  @Field(() => Number, { nullable: true })
  @ApiProperty({ example: 57.78, description: 'Рейтинг положительных отзывов', required: false })
  rating?: number;
}
