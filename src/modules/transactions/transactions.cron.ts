import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';

import { TransactionEntitySchema } from './transaction.schema';
import { TransactionStatus } from './transactions.enums';

@Injectable()
export class TransactionsCron {
  private readonly logger = new Logger(TransactionsCron.name);

  constructor(
    @InjectModel(TransactionEntitySchema.name)
    private readonly transactionModel: Model<TransactionEntitySchema>
  ) {}

  @Cron(CronExpression.EVERY_MINUTE, { name: 'expire-transactions' })
  async expireTransactions(): Promise<void> {
    const { modifiedCount } = await this.transactionModel.updateMany(
      {
        status: TransactionStatus.PENDING,
        expiresAt: { $lt: new Date() }
      },
      { $set: { status: TransactionStatus.FAILED } }
    );

    if (!modifiedCount) return;

    this.logger.log(`EXPIRE TRANSACTIONS CRON: expired ${modifiedCount} transactions`);
  }
}
