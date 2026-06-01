import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Dough, Ingredient, Size } from '../constants';

@InputType('OrderedPizzaInput')
@ObjectType()
export class OrderedPizza {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: '1', description: 'Идентификатор пиццы' })
  id: string;

  @IsArray()
  @IsEnum(Ingredient, { each: true })
  @Field(() => [Ingredient])
  @ApiProperty({
    example: [Ingredient.PINEAPPLE, Ingredient.CHILE],
    description: 'Топпинги',
    enum: Ingredient,
    enumName: 'Ingredient',
    type: [Ingredient]
  })
  toppings: Ingredient[];

  @IsEnum(Size)
  @Field(() => Size)
  @ApiProperty({ description: 'Размер пиццы', enum: Size, example: Size.SMALL, enumName: 'Size' })
  size: Size;

  @IsEnum(Dough)
  @Field(() => Dough)
  @ApiProperty({ description: 'Тип теста', enum: Dough, example: Dough.THIN, enumName: 'Dough' })
  dough: Dough;
}
