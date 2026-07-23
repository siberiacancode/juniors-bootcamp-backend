import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';

import { Size } from '../pizzas.enums';

@InputType('PizzaItemSizeInput')
@ObjectType()
export class PizzaItemSize {
  @ApiProperty({
    description: 'Идентификатор размера продукта',
    example: Size.SMALL,
    enum: Size,
    enumName: 'Size'
  })
  @Field(() => Size)
  @IsEnum(Size)
  type: Size;

  @ApiProperty({ description: 'Цена для данного размера' })
  @Field(() => Number)
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'Числовой объём/количество',
    example: 0.4,
    required: false
  })
  @Field(() => Number, { nullable: true })
  @IsNumber()
  volume: number;
}
