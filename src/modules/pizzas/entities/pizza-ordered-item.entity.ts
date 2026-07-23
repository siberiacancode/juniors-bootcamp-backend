import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
import { Types } from 'mongoose';

import { Category, Ingredient, Option, Size } from '../pizzas.enums';

@InputType('PizzaOrderedItemInput')
@ObjectType()
export class PizzaOrderedItem {
  @ApiProperty({ description: 'Идентификатор продукта' })
  @Field(() => ID)
  @IsNotEmpty()
  @IsString()
  _id: Types.ObjectId;

  @ApiProperty({
    description: 'Категория продукта',
    example: Category.PIZZA,
    enum: Category,
    enumName: 'Category'
  })
  @Field(() => Category)
  @IsEnum(Category)
  category: Category;

  @ApiProperty({ description: 'Количество одинаковых позиций', example: 1, default: 1 })
  @Field(() => Int, { defaultValue: 1 })
  @IsInt()
  @Min(1)
  quantity: number = 1;

  @ApiProperty({
    description: 'Размер',
    example: Size.SMALL,
    enum: Size,
    required: false,
    enumName: 'Size'
  })
  @Field(() => Size, { nullable: true })
  @IsEnum(Size)
  @IsOptional()
  size?: Size;

  @ApiProperty({
    description: 'Выбранная доп-опция: корка, сливки и т.д.',
    example: Option.CRUST_THIN,
    enum: Option,
    required: false,
    enumName: 'ProductOption'
  })
  @Field(() => Option, { nullable: true })
  @IsEnum(Option)
  @IsOptional()
  option?: Option;

  @ApiProperty({
    type: [Ingredient],
    description: 'Доп-ингредиенты',
    enum: Ingredient,
    required: false,
    enumName: 'Ingredient'
  })
  @Field(() => [Ingredient], { nullable: true })
  @IsArray()
  @IsEnum(Ingredient, { each: true })
  @IsOptional()
  toppings?: Ingredient[];
}
