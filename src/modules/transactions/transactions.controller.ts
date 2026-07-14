import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { GetTransactionResponse } from './responses';
import { TransactionsService } from './transactions.service';

@ApiTags('transactions')
@Controller()
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @ApiOperation({ summary: 'Получить транзакцию по ID' })
  @ApiResponse({
    type: GetTransactionResponse,
    description: 'Получить транзакцию по ID',
    status: 200
  })
  @Get('/transactions/:id')
  async getTransaction(@Param('id') transactionId: string): Promise<GetTransactionResponse> {
    return this.transactionsService.getTransaction(transactionId);
  }
}
