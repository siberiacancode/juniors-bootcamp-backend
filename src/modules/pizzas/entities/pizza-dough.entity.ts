import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

import { Dough } from '../pizzas.enums';

@InputType('PizzaDoughInput')
@ObjectType()
export class PizzaDough {
  @ApiProperty({
    description: 'Тип теста',
    example: Dough.THIN,
    enum: Dough,
    enumName: 'Dough'
  })
  @Field(() => Dough)
  @IsEnum(Dough)
  type: Dough;

  @ApiProperty({ description: 'Цена теста' })
  @Field(() => Number)
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
