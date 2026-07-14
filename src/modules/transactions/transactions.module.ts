import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TransactionEntitySchema, TransactionSchema } from './transaction.schema';
import { TransactionsController } from './transactions.controller';
import { TransactionsResolver } from './transactions.resolver';
import { TransactionsService } from './transactions.service';

@Module({
  controllers: [TransactionsController],
  exports: [TransactionsService],
  imports: [
    MongooseModule.forFeature([{ name: TransactionEntitySchema.name, schema: TransactionSchema }])
  ],
  providers: [TransactionsService, TransactionsResolver]
})
export class TransactionsModule {}
