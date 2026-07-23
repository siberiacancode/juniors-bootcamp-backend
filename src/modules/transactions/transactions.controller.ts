import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Result } from '@/utils/helpers';

import { PayTransactionDto } from './dto';
import { GetTransactionResponse, PayTransactionResponse } from './responses';
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
    const transaction = await this.transactionsService.getTransaction(transactionId);
    return Result.success({
      transaction
    });
  }

  @ApiOperation({ summary: 'Оплатить (закрыть) транзакцию по ID' })
  @ApiResponse({
    type: PayTransactionResponse,
    description: 'Оплата транзакции: новая карта / сохранённая карта / QR',
    status: 200
  })
  @Post('/transactions/:id/pay')
  async payTransaction(
    @Param('id') transactionId: string,
    @Body() body: Omit<PayTransactionDto, 'transactionId'>
  ): Promise<PayTransactionResponse> {
    return this.transactionsService.payTransaction({ ...body, transactionId });
  }
}
