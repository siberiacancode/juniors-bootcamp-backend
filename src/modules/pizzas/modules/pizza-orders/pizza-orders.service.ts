import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import { Model } from 'mongoose';

import { BaseService } from '@/utils/base';

import { PizzaOrderEntitySchema } from './pizza-order.schema';
import { PizzaStatus } from './pizza-orders.enums';

@Injectable()
export class PizzaOrdersService extends BaseService<PizzaOrderEntitySchema> {
  constructor(
    @InjectModel(PizzaOrderEntitySchema.name) private pizzaOrderModel: Model<PizzaOrderEntitySchema>
  ) {
    super(pizzaOrderModel);
  }

  @Cron('*/20 * * * *', {
    name: ''
  })
  async pizzaOrdersCron() {
    const orders = await this.pizzaOrderModel.find({
      status: {
        $nin: [PizzaStatus.SUCCESS, PizzaStatus.CANCELED]
      }
    });
    const randomOrders = orders.filter(() => Math.random() < 0.3);

    if (!randomOrders.length) return;

    const updatedResult = await this.pizzaOrderModel.updateMany(
      { _id: { $in: randomOrders.map((order) => order._id) } },
      { $inc: { status: 1 }, $set: { cancellable: false } }
    );
    console.log('PIZZA CRON:', new Date(), 'updated', updatedResult.modifiedCount);
  }
}
