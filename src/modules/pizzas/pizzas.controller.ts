import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import type { User } from '@/modules/users';

import { CurrentUser } from '@/utils/decorators';
import { AuthorizedOnly } from '@/utils/guards';

import {
  CalculatePizzaOrderDto,
  CancelPizzaOrderDto,
  CreatePizzaPaymentDto,
  GetPizzaCatalogDto,
  GetPizzaOrderDto
} from './dto';
import { PizzaCategory } from './pizzas.enums';
import { PizzasService } from './pizzas.service';
import {
  CalculateOrderResponse,
  CancelPizzaOrderResponse,
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
  @ApiQuery({
    description: 'Фильтр по категории',
    enum: PizzaCategory,
    required: false,
    enumName: 'PizzaCategory',
    name: 'category'
  })
  @ApiResponse({ type: GetPizzaCatalogResponse, description: 'catalog', status: 200 })
  @Get('/catalog')
  async getPizzaCatalog(
    @Query() getPizzaCatalog: GetPizzaCatalogDto
  ): Promise<GetPizzaCatalogResponse> {
    return this.pizzaService.getPizzaCatalog(getPizzaCatalog);
  }

  @ApiOperation({ summary: 'Рассчитать стоимость корзины и комиссию' })
  @ApiResponse({ type: CalculateOrderResponse, description: 'calculate', status: 200 })
  @Post('/calculate')
  async calculatePizzaOrder(
    @Body() calculateOrderDto: CalculatePizzaOrderDto
  ): Promise<CalculateOrderResponse> {
    return this.pizzaService.calculatePizzaOrder(calculateOrderDto);
  }

  @ApiOperation({ summary: 'Создать заказ и транзакцию для оплаты' })
  @ApiResponse({ type: CreatePizzaPaymentResponse, description: 'payment', status: 200 })
  @Post('/payment')
  async createPizzaPayment(
    @Body() createPizzaPaymentDto: CreatePizzaPaymentDto
  ): Promise<CreatePizzaPaymentResponse> {
    return this.pizzaService.createPizzaPayment(createPizzaPaymentDto);
  }

  @ApiOperation({ summary: 'Получить все заказы' })
  @ApiResponse({ type: GetPizzaOrdersResponse, description: 'orders', status: 200 })
  @Get('/orders')
  @AuthorizedOnly()
  async getPizzaOrders(@CurrentUser() user: User): Promise<GetPizzaOrdersResponse> {
    return this.pizzaService.getPizzaOrders(user.phone);
  }

  @ApiOperation({ summary: 'Получить заказ' })
  @ApiResponse({ type: GetPizzaOrderResponse, description: 'order', status: 200 })
  @Get('/orders/:orderId')
  @AuthorizedOnly()
  async getPizzaOrder(
    @Param() getPizzaOrderDto: GetPizzaOrderDto,
    @CurrentUser() user: User
  ): Promise<GetPizzaOrderResponse> {
    return this.pizzaService.getPizzaOrder(getPizzaOrderDto.orderId, user.phone);
  }

  @ApiOperation({ summary: 'Отменить заказ' })
  @ApiResponse({ type: CancelPizzaOrderResponse, description: 'order cancel', status: 200 })
  @Patch('/orders/:orderId/cancel')
  @AuthorizedOnly()
  async cancelPizzaOrder(
    @Param() cancelPizzaOrderDto: CancelPizzaOrderDto
  ): Promise<CancelPizzaOrderResponse> {
    return this.pizzaService.cancelPizzaOrder(cancelPizzaOrderDto.orderId);
  }
}
