import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PizzaEntitySchema } from '@/modules/pizzas/pizza.schema';
import { Seeder } from '@/utils/interfaces';

import { PIZZAS } from './pizzas.seed';

@Injectable()
export class PizzasSeeder implements Seeder {
  constructor(
    @InjectModel(PizzaEntitySchema.name) private readonly pizzaModel: Model<PizzaEntitySchema>
  ) {}

  async seed() {
    await this.pizzaModel.insertMany(PIZZAS);

    console.log('🍕 Pizzas seeded');
  }
}
