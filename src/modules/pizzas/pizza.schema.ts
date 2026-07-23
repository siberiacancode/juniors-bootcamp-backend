import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { PizzaIngredient, PizzaItemSize, PizzaOption } from './entities';
import { Category } from './pizzas.enums';

@ObjectType({ description: 'Продукт каталога' })
@Schema({
  collection: 'pizzas'
})
export class PizzaEntitySchema {
  @Prop({
    enum: Object.values(Category),
    required: true,
    default: Category.PIZZA,
    index: true
  })
  category: Category;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false, default: [] })
  ingredients?: PizzaIngredient[];

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  sizes: PizzaItemSize[];

  @Prop({ type: Array, required: false, default: [] })
  options?: PizzaOption[];

  @Prop({ required: true })
  calories: number;

  @Prop({ required: true })
  protein: string;

  @Prop({ required: true })
  totalFat: string;

  @Prop({ required: true })
  carbohydrates: string;

  @Prop({ required: true })
  sodium: string;

  @Prop({ required: true })
  allergens: string[];

  @Prop({ required: true })
  isVegetarian: boolean;

  @Prop({ required: true })
  isGlutenFree: boolean;

  @Prop({ required: true })
  isNovelty: boolean;

  @Prop({ required: true })
  isHit: boolean;

  @Prop({ required: true })
  img: string;
}

export type PizzaDocument = HydratedDocument<PizzaEntitySchema>;
export const PizzaSchema = SchemaFactory.createForClass(PizzaEntitySchema);
