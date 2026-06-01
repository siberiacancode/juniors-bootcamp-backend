import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';

import { Size } from '../constants/enums';

@InputType('PizzaSizeInput')
@ObjectType()
export class PizzaSize {
  @IsEnum(Size)
  @Field(() => Size)
  @ApiProperty({
    enum: Size,
    example: Size.SMALL,
    enumName: 'Size',
    description: 'Идентификатор размера пиццы'
  })
  type: Size;

  @IsNumber()
  @Field(() => Number)
  @ApiProperty({ description: 'Цена пиццы' })
  price: number;
}
