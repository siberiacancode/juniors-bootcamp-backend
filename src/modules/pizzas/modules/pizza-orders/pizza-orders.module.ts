import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TransactionsModule } from '@/modules/transactions';

import { PizzaOrderEntitySchema, PizzaOrderSchema } from './pizza-order.schema';
import { PizzaOrdersCron } from './pizza-orders.cron';
import { PizzaOrdersService } from './pizza-orders.service';

@Module({
  exports: [PizzaOrdersService],
  imports: [
    TransactionsModule,
    MongooseModule.forFeature([{ name: PizzaOrderEntitySchema.name, schema: PizzaOrderSchema }])
  ],
  providers: [PizzaOrdersCron, PizzaOrdersService]
})
export class PizzaOrdersModule {}
