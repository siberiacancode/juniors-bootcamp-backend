import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import type { User } from '@/modules/users';

import { BaseResponse } from '@/utils/base';
import { CurrentUser } from '@/utils/decorators';
import { AuthorizedOnly } from '@/utils/guards';

import { CancelPizzaOrderDto, CreatePizzaPaymentDto, GetPizzaOrderDto } from './dto';
import { PizzasService } from './pizzas.service';
import {
  CreatePizzaPaymentResponse,
  GetPizzaCatalogResponse,
  GetPizzaOrderResponse,
  GetPizzaOrdersResponse
} from './responses';

@ApiTags('🍕 pizzas')
@Controller('/pizzas')
export class PizzasController {
  constructor(private readonly pizzaService: PizzasService) {}

  @ApiOperation({ summary: 'Получить каталог' })
  @ApiResponse({
    type: GetPizzaCatalogResponse,
    description: 'catalog',
    status: 200
  })
  @Get('/catalog')
  async getCatalog(): Promise<GetPizzaCatalogResponse> {
    return this.pizzaService.getCatalog();
  }

  @ApiOperation({ summary: 'Оплатить корзину' })
  @ApiResponse({
    type: CreatePizzaPaymentResponse,
    description: 'payment',
    status: 200
  })
  @Post('/payment')
  async createPizzaPayment(
    @Body() createPizzaPaymentDto: CreatePizzaPaymentDto
  ): Promise<CreatePizzaPaymentResponse> {
    return this.pizzaService.createPizzaPayment(createPizzaPaymentDto);
  }

  @ApiOperation({ summary: 'Получить все заказы' })
  @ApiResponse({
    type: GetPizzaOrdersResponse,
    description: 'orders',
    status: 200
  })
  @Get('/orders')
  @AuthorizedOnly()
  async getPizzaOrders(@CurrentUser() user: User): Promise<GetPizzaOrdersResponse> {
    return this.pizzaService.getPizzaOrders(user.phone);
  }

  @ApiOperation({ summary: 'Получить заказ' })
  @ApiResponse({
    type: GetPizzaOrderResponse,
    description: 'order',
    status: 200
  })
  @Get('/orders/:orderId')
  @AuthorizedOnly()
  async getPizzaOrder(
    @Param() getPizzaOrderDto: GetPizzaOrderDto,
    @CurrentUser() user: User
  ): Promise<GetPizzaOrderResponse> {
    return this.pizzaService.getPizzaOrder(getPizzaOrderDto.orderId, user.phone);
  }

  @ApiOperation({ summary: 'Отменить заказ' })
  @ApiResponse({
    type: BaseResponse,
    description: 'order cancel',
    status: 200
  })
  @Patch('/orders/:orderId/cancel')
  @AuthorizedOnly()
  async cancelPizzaOrder(@Param() cancelPizzaOrderDto: CancelPizzaOrderDto): Promise<BaseResponse> {
    return this.cancelPizzaOrder(cancelPizzaOrderDto);
  }
}
