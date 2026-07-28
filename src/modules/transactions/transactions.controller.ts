import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Result } from '@/utils/helpers';

import { PayTransactionDto } from './dto';
import { GetTransactionResponse, PayTransactionResponse } from './responses';
import { TransactionsService } from './transactions.service';

@ApiTags('💸 transactions')
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

  @ApiBody({ type: PayTransactionDto })
  @ApiOperation({ summary: 'Оплатить (закрыть) транзакцию картой' })
  @ApiResponse({
    type: PayTransactionResponse,
    description: 'Оплата транзакции: новая карта / сохранённая карта',
    status: 200
  })
  @Post('/transactions/pay')
  async payTransaction(@Body() body: PayTransactionDto): Promise<PayTransactionResponse> {
    return this.transactionsService.payTransaction(body);
  }

  @ApiOperation({ summary: 'Оплатить транзакцию по QR' })
  @ApiResponse({
    type: PayTransactionResponse,
    description: 'Оплата транзакции по QR',
    status: 200
  })
  @Post('/transactions/:id/pay/qr')
  async payTransactionByQr(@Param('id') transactionId: string): Promise<PayTransactionResponse> {
    return this.transactionsService.payTransactionByQr(transactionId);
  }
}
