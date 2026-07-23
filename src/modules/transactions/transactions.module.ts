import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CardsModule } from '@/modules/cards';
import { PizzaOrdersModule } from '@/modules/pizzas/modules/pizza-orders';

import { TransactionEntitySchema, TransactionSchema } from './transaction.schema';
import { TransactionsController } from './transactions.controller';
import { TransactionsCron } from './transactions.cron';
import { TransactionsResolver } from './transactions.resolver';
import { TransactionsService } from './transactions.service';

@Module({
  controllers: [TransactionsController],
  exports: [TransactionsService],
  imports: [
    CardsModule,
    PizzaOrdersModule,
    MongooseModule.forFeature([{ name: TransactionEntitySchema.name, schema: TransactionSchema }])
  ],
  providers: [TransactionsService, TransactionsResolver, TransactionsCron]
})
export class TransactionsModule {}
