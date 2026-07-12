import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';

import { Size } from '../constants/enums';

@InputType('PizzaSizeInput')
@ObjectType()
export class PizzaSize {
  @ApiProperty({
    description: 'Идентификатор размера пиццы',
    example: Size.SMALL,
    enum: Size,
    enumName: 'Size'
  })
  @Field(() => Size)
  @IsEnum(Size)
  type: Size;

  @ApiProperty({ description: 'Цена пиццы' })
  @Field(() => Number)
  @IsNumber()
  price: number;
}
