import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { BaseService } from '@/utils/base';
import { Result, withBaseUrl } from '@/utils/helpers';

import { GetTransactionResponse } from './responses';
import { TransactionEntitySchema } from './transaction.schema';

@Injectable()
export class TransactionsService extends BaseService<TransactionEntitySchema> {
  constructor(
    @InjectModel(TransactionEntitySchema.name)
    private readonly transactionModel: Model<TransactionEntitySchema>
  ) {
    super(transactionModel);
  }

  async getTransaction(transactionId: string): Promise<GetTransactionResponse> {
    if (!Types.ObjectId.isValid(transactionId)) {
      throw new BadRequestException(Result.fail('Некорректный ID транзакции'));
    }

    const transaction = await this.findById(transactionId);

    if (!transaction) {
      throw new BadRequestException(Result.fail('Транзакция не найдена'));
    }

    return Result.success({ transaction });
  }

  async generatePaymentUrl(transactionId: string, backUrl: string): Promise<string> {
    if (!Types.ObjectId.isValid(transactionId)) {
      throw new BadRequestException(Result.fail('Некорректный ID транзакции'));
    }

    const transaction = await this.findById(transactionId);

    if (!transaction) {
      throw new BadRequestException(Result.fail('Транзакция не найдена'));
    }

    const encodedBackUrl = encodeURIComponent(backUrl);

    return `${withBaseUrl(`/pay/${transaction.payLinkToken}`)}?backUrl=${encodedBackUrl}`;
  }
}
