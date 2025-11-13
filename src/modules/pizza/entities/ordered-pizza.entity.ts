import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Dough } from './pizza-dough.entity';
import { Ingredient } from './pizza-ingredient.entity';
import { Size } from './pizza-size.entity';

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
    example: ['PINEAPPLE', 'CHEDDAR'],
    description: 'Топпинги',
    enum: Ingredient,
    type: [Ingredient]
  })
  toppings: Ingredient[];

  @IsEnum(Size)
  @Field(() => Size)
  @ApiProperty({ example: 'SMALL', description: 'Размер пиццы', enum: Size })
  size: Size;

  @IsEnum(Dough)
  @Field(() => Dough)
  @ApiProperty({ example: 'THIN', description: 'Тип теста', enum: Dough })
  dough: Dough;
}
