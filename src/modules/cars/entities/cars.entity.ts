import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { BodyType, Brand, Color, Steering, Transmission } from '../constants/enums';

@ObjectType()
export class Media {
  @Field(() => String)
  @ApiProperty({ example: '/static/images/cars/haval-jolion.webp' })
  url!: string;

  @Field(() => Boolean)
  @ApiProperty({ example: true })
  isCover!: boolean;
}

@ObjectType('Car')
export class Car {
  @Field(() => String)
  @ApiProperty({ example: '1', description: 'ID автомобиля' })
  id!: string;

  @Field(() => String)
  @ApiProperty({ example: 'Model X', description: 'Название модели' })
  name!: string;

  @Field(() => Brand)
  @ApiProperty({
    enum: Brand,
    example: Brand.HAVAL,
    enumName: 'Brand',
    description: 'Марка автомобиля'
  })
  brand!: Brand;

  @Field(() => [Media])
  @ApiProperty({ type: [Media] })
  media!: Media[];

  @Field(() => Transmission)
  @ApiProperty({
    enum: Transmission,
    example: Transmission.AUTOMATIC,
    enumName: 'Transmission',
    description: 'Тип коробки передач'
  })
  transmission!: Transmission;

  @Field(() => Number)
  @ApiProperty({ example: 15000, description: 'Цена аренды в сутки' })
  price!: number;

  @Field(() => String)
  @ApiProperty({ example: 'Москва, ул. Пушкина 10', description: 'Местоположение' })
  location!: string;

  @Field(() => Color)
  @ApiProperty({
    enum: Color,
    example: Color.BLACK,
    enumName: 'Color',
    description: 'Цвет автомобиля'
  })
  color!: Color;

  @Field(() => BodyType)
  @ApiProperty({
    enum: BodyType,
    example: BodyType.SEDAN,
    enumName: 'BodyType',
    description: 'Тип кузова'
  })
  bodyType!: BodyType;

  @Field(() => Steering)
  @ApiProperty({
    enum: Steering,
    enumName: 'Steering',
    example: Steering.LEFT,
    description: 'Расположение руля'
  })
  steering!: Steering;
}

@ObjectType('CarsPaginationMeta')
export class CarsPaginationMeta {
  @Field(() => Number)
  @ApiProperty({
    example: 100,
    description: 'Общее количество элементов во всех страницах',
    type: Number
  })
  total!: number;

  @Field(() => Number)
  @ApiProperty({
    example: 1,
    description: 'Текущий номер страницы (по умолчанию 1)',
    type: Number
  })
  page!: number;

  @Field(() => Number)
  @ApiProperty({
    example: 10,
    description: 'Количество элементов на странице (по умолчанию 10)',
    type: Number
  })
  limit!: number;

  @Field(() => Number)
  @ApiProperty({
    example: 10,
    description: 'Общее количество доступных страниц',
    type: Number
  })
  totalPages!: number;
}
