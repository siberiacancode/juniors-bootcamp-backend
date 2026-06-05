import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { Ingredient } from '../constants/enums';

@InputType('PizzaIngredientInput')
@ObjectType()
export class PizzaIngredient {
  @Field(() => Ingredient)
  @ApiProperty({
    enum: Ingredient,
    example: Ingredient.PINEAPPLE,
    enumName: 'Ingredient',
    description: 'Идентификатор ингредиента'
  })
  type!: Ingredient;

  @Field(() => Number)
  @ApiProperty({ description: 'Цена ингредиента' })
  price!: number;

  @Field(() => String)
  @ApiProperty({ description: 'Изображение ингредиента' })
  img!: string;
}
