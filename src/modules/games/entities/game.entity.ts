import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { GameGenre } from '../constants';

@ObjectType()
export class PaginationMeta {
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

@ObjectType('Game')
export class Game {
  @Field(() => String)
  @ApiProperty({ example: '1', description: 'ID игры' })
  id: string;

  @Field(() => String)
  @ApiProperty({ example: 'Battlefield 2042', description: 'Название игры' })
  name: string;

  @Field(() => String)
  @ApiProperty({ example: 'battlefield-2042', description: 'Slug игры' })
  slug: string;

  @Field(() => String)
  @ApiProperty({ example: '1517290', description: 'Внешний ID (Steam/KupiKod)' })
  externalId: string;

  @Field(() => Number)
  @ApiProperty({ example: 2021, description: 'Год релиза' })
  year: number;

  @Field(() => [GameGenre])
  @ApiProperty({ enum: GameGenre, isArray: true, description: 'Жанры игры' })
  genres: GameGenre[];

  @Field(() => String)
  @ApiProperty({ example: 'Онлайн-шутер с масштабными сражениями.', description: 'Описание игры' })
  description: string;

  @Field(() => String)
  @ApiProperty({ example: '/static/images/pizza/1.webp', description: 'Изображение игры' })
  image: string;

  @Field(() => Number)
  @ApiProperty({ example: 968, description: 'Текущая цена' })
  price: number;

  @Field(() => Number, { nullable: true })
  @ApiProperty({ example: 2688, description: 'Старая цена', required: false })
  oldPrice?: number;

  @Field(() => Number, { nullable: true })
  @ApiProperty({ example: 57.78, description: 'Рейтинг положительных отзывов', required: false })
  rating?: number;
}
