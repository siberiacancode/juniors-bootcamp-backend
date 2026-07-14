import { Args, Query, Resolver } from '@nestjs/graphql';

import { GetTransactionDto } from './dto';
import { GetTransactionResponse } from './responses';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transactions.service';

@Resolver(() => Transaction)
export class TransactionsResolver {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Query(() => GetTransactionResponse)
  async getTransaction(
    @Args() getTransactionDto: GetTransactionDto
  ): Promise<GetTransactionResponse> {
    return this.transactionsService.getTransaction(getTransactionDto.transactionId);
  }
}
