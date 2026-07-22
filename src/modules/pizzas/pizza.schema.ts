import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { PizzaDough, PizzaIngredient, PizzaSize } from './entities';

@ObjectType({ description: 'Пицца' })
@Schema({
  collection: 'pizzas'
})
export class PizzaEntitySchema {
  @Prop({
    required: true
  })
  name: string;

  @Prop({
    required: true
  })
  ingredients: PizzaIngredient[];

  @Prop({
    required: true
  })
  description: string;

  @Prop({
    required: true
  })
  sizes: PizzaSize[];

  @Prop({
    required: true
  })
  doughs: PizzaDough[];

  @Prop({
    required: true
  })
  calories: number;

  @Prop({
    required: true
  })
  protein: string;

  @Prop({
    required: true
  })
  totalFat: string;

  @Prop({
    required: true
  })
  carbohydrates: string;

  @Prop({
    required: true
  })
  sodium: string;

  @Prop({
    required: true
  })
  allergens: string[];

  @Prop({
    required: true
  })
  isVegetarian: boolean;

  @Prop({
    required: true
  })
  isGlutenFree: boolean;

  @Prop({
    required: true
  })
  isNovelty: boolean;

  @Prop({
    required: true
  })
  isHit: boolean;

  @Prop({
    required: true
  })
  img: string;
}

export type PizzaDocument = HydratedDocument<PizzaEntitySchema>;
export const PizzaSchema = SchemaFactory.createForClass(PizzaEntitySchema);
