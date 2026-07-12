import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PizzaOrder, PizzaOrderSchema } from './pizza-order.entity';
import { PizzaOrderService } from './pizza-order.service';

@Module({
  exports: [PizzaOrderService],
  imports: [MongooseModule.forFeature([{ name: PizzaOrder.name, schema: PizzaOrderSchema }])],
  providers: [PizzaOrderService]
})
export class PizzaOrderModule {}
