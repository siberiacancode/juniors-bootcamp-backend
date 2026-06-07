import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { DeliveryType, GameGenre, GameType, Region } from '../constants';

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

@ObjectType('SystemRequirements')
export class SystemRequirements {
  @Field(() => String, {
    nullable: true
  })
  @ApiProperty({ required: false, example: 'Windows 10', description: 'Операционная система' })
  oc?: string;

  @Field(() => String, {
    nullable: true
  })
  @ApiProperty({ required: false, example: 'Intel Core i5-9400F', description: 'Процессор' })
  processor?: string;

  @Field(() => String, {
    nullable: true
  })
  @ApiProperty({ required: false, example: '16 GB', description: 'Оперативная память' })
  memory?: string;

  @Field(() => String, {
    nullable: true
  })
  @ApiProperty({ required: false, example: 'NVIDIA GeForce GTX 1660', description: 'Видеокарта' })
  graphics?: string;

  @Field(() => String, {
    nullable: true
  })
  @ApiProperty({ required: false, example: '500 GB', description: 'Место на диске' })
  storage?: string;
}

@ObjectType('PriceVariant')
export class PriceVariant {
  @Field(() => Region)
  @ApiProperty({ enum: Region, enumName: 'Region', example: Region.EUROPE, description: 'Регион' })
  region: Region;

  @Field(() => Number)
  @ApiProperty({ example: 968, description: 'Текущая цена' })
  price: number;

  @Field(() => Number, { nullable: true })
  @ApiProperty({ example: 2688, description: 'Старая цена', required: false })
  oldPrice?: number;

  @Field(() => DeliveryType)
  @ApiProperty({
    enum: DeliveryType,
    enumName: 'DeliveryType',
    example: DeliveryType.STEAM_KEY,
    description: 'Способ получения'
  })
  deliveryType: DeliveryType;

  @Field(() => String)
  @ApiProperty({ example: 'Deluxe', description: 'Издание' })
  edition: string;
}

export class BaseGame {
  @Field(() => String)
  @ApiProperty({ example: 'battlefield-2042', description: 'Slug игры' })
  slug: string;

  @Field(() => String)
  @ApiProperty({ example: 'Battlefield 2042', description: 'Название игры' })
  name: string;

  @Field(() => Number)
  @ApiProperty({ example: 1637280000, description: 'Дата релиза' })
  releaseDate: number;

  @Field(() => GameType)
  @ApiProperty({
    enum: GameType,
    enumName: 'GameType',
    example: GameType.GAME,
    description: 'Тип'
  })
  type: GameType;

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
  @ApiProperty({ example: '/static/images/games/cs2.webp', description: 'Изображение игры' })
  image: string;
}

@ObjectType('FilteredGame')
export class FilteredGame extends BaseGame {
  @Field(() => PriceVariant)
  @ApiProperty({ description: 'Наименьший вариант цены', type: PriceVariant })
  priceVariant: PriceVariant;
}

@ObjectType('DetailedGame')
export class DetailedGame extends BaseGame {
  @Field(() => [DeliveryType])
  @ApiProperty({
    enum: DeliveryType,
    enumName: 'DeliveryType',
    example: [DeliveryType.STEAM_KEY, DeliveryType.XBOX_KEY, DeliveryType.STEAM_GIFT],
    isArray: true,
    description: 'Способ получения'
  })
  deliveryTypes: DeliveryType[];

  @Field(() => String)
  @ApiProperty({ example: 'Онлайн-шутер с масштабными сражениями.', description: 'Описание игры' })
  description: string;

  @Field(() => SystemRequirements)
  @ApiProperty({ description: 'Минимальные системные требования' })
  minimumSystemRequirements: SystemRequirements;

  @Field(() => SystemRequirements)
  @ApiProperty({ description: 'Рекомендуемые системные требования' })
  recommendedSystemRequirements: SystemRequirements;

  @Field(() => String)
  @ApiProperty({ example: 'EA Games', description: 'Разработчик' })
  developer: string;

  @Field(() => String)
  @ApiProperty({ example: 'Electronic Arts', description: 'Издатель' })
  publisher: string;

  @Field(() => String)
  @ApiProperty({ example: '1517290', description: 'Внешний ID (Steam/KupiKod)' })
  externalId: string;

  @Field(() => [String])
  @ApiProperty({ example: ['/static/images/games/cs2.webp'], description: 'Скриншоты игры' })
  screenshots: string[];
}
