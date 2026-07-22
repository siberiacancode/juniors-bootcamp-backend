import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PizzaOrderEntitySchema, PizzaOrderSchema } from './pizza-order.schema';
import { PizzaOrdersService } from './pizza-orders.service';

@Module({
  exports: [PizzaOrdersService],
  imports: [
    MongooseModule.forFeature([{ name: PizzaOrderEntitySchema.name, schema: PizzaOrderSchema }])
  ],
  providers: [PizzaOrdersService]
})
export class PizzaOrdersModule {}
