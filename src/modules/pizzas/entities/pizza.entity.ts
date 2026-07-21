import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

import { PizzaDough } from './pizza-dough.entity';
import { PizzaIngredient } from './pizza-ingredient.entity';
import { PizzaSize } from './pizza-size.entity';

@InputType('PizzaInput')
@ObjectType()
export class Pizza {
  @ApiProperty({ type: String, description: 'ID пиццы' })
  @Field(() => ID)
  _id: Types.ObjectId;

  @ApiProperty({ description: 'Название пиццы' })
  @Field(() => String)
  name: string;

  @ApiProperty({ type: [PizzaIngredient], description: 'Ингредиенты' })
  @Field(() => [PizzaIngredient])
  ingredients: PizzaIngredient[];

  @ApiProperty({ description: 'Описание пиццы' })
  @Field(() => String)
  description: string;

  @ApiProperty({ type: [PizzaSize], description: 'Размеры пиццы' })
  @Field(() => [PizzaSize])
  sizes: PizzaSize[];

  @ApiProperty({ type: [PizzaDough], description: 'Тип теста' })
  @Field(() => [PizzaDough])
  doughs: PizzaDough[];

  @ApiProperty({ description: 'Количество калорий' })
  @Field(() => Number)
  calories: number;

  @ApiProperty({ description: 'Количество белков' })
  @Field(() => String)
  protein: string;

  @ApiProperty({ description: 'Количество жиров' })
  @Field(() => String)
  totalFat: string;

  @ApiProperty({ description: 'Количество углеводов' })
  @Field(() => String)
  carbohydrates: string;

  @ApiProperty({ description: 'Количество натрия' })
  @Field(() => String)
  sodium: string;

  @ApiProperty({ description: 'Список аллергенов' })
  @Field(() => [String])
  allergens: string[];

  @ApiProperty({ description: 'Для вегетарианцев' })
  @Field(() => Boolean)
  isVegetarian: boolean;

  @ApiProperty({ description: 'Наличие глютена' })
  @Field(() => Boolean)
  isGlutenFree: boolean;

  @ApiProperty({ description: 'Новинка' })
  @Field(() => Boolean)
  isNovelty: boolean;

  @ApiProperty({ description: 'Хит' })
  @Field(() => Boolean)
  isHit: boolean;

  @ApiProperty({ description: 'Изображение пиццы' })
  @Field(() => String)
  img: string;
}
