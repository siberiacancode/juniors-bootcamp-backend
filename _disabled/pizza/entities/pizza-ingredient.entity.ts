import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { Ingredient } from '../constants/enums';

@InputType('PizzaIngredientInput')
@ObjectType()
export class PizzaIngredient {
  @ApiProperty({
    description: 'Идентификатор ингредиента',
    example: Ingredient.PINEAPPLE,
    enum: Ingredient,
    enumName: 'Ingredient'
  })
  @Field(() => Ingredient)
  type: Ingredient;

  @ApiProperty({ description: 'Цена ингредиента' })
  @Field(() => Number)
  price: number;

  @ApiProperty({ description: 'Изображение ингредиента' })
  @Field(() => String)
  img: string;
}
