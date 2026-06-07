import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

import { Dough } from '../constants';

@InputType('PizzaDoughInput')
@ObjectType()
export class PizzaDough {
  @IsEnum(Dough)
  @Field(() => Dough)
  @ApiProperty({
    enum: Dough,
    example: Dough.THIN,
    enumName: 'Dough',
    description: 'Идентификатор типа теста'
  })
  type: Dough;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Number)
  @ApiProperty({ description: 'Цена теста' })
  price: number;
}
