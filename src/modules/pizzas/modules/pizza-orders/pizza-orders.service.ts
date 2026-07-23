import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from '@/utils/base';

import { PizzaOrderEntitySchema } from './pizza-order.schema';

@Injectable()
export class PizzaOrdersService extends BaseService<PizzaOrderEntitySchema> {
  constructor(
    @InjectModel(PizzaOrderEntitySchema.name)
    private pizzaOrderModel: Model<PizzaOrderEntitySchema>
  ) {
    super(pizzaOrderModel);
  }
}
