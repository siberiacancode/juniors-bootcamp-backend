import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Dough, Ingredient, Size } from '../constants';

@InputType('OrderedPizzaInput')
@ObjectType()
export class OrderedPizza {
  @ApiProperty({ description: 'Идентификатор пиццы', example: '1' })
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    type: [Ingredient],
    description: 'Топпинги',
    example: [Ingredient.PINEAPPLE, Ingredient.CHILE],
    enum: Ingredient,
    enumName: 'Ingredient'
  })
  @Field(() => [Ingredient])
  @IsArray()
  @IsEnum(Ingredient, { each: true })
  toppings: Ingredient[];

  @ApiProperty({ description: 'Размер пиццы', example: Size.SMALL, enum: Size, enumName: 'Size' })
  @Field(() => Size)
  @IsEnum(Size)
  size: Size;

  @ApiProperty({ description: 'Тип теста', example: Dough.THIN, enum: Dough, enumName: 'Dough' })
  @Field(() => Dough)
  @IsEnum(Dough)
  dough: Dough;
}
