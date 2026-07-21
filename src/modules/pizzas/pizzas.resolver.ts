import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { BaseResponse } from '@/utils/base';
import { CurrentUser } from '@/utils/decorators';
import { AuthorizedOnly } from '@/utils/guards';

import { User } from '../users';
import { CancelPizzaOrderDto, CreatePizzaPaymentDto, GetPizzaOrderDto } from './dto';
import { Pizza } from './entities';
import { PizzasService } from './pizzas.service';
import {
  CreatePizzaPaymentResponse,
  GetPizzaCatalogResponse,
  GetPizzaOrderResponse,
  GetPizzaOrdersResponse
} from './responses';

@Resolver('🍕 pizzas')
@Resolver(() => Pizza)
export class PizzasResolver {
  constructor(private readonly pizzaService: PizzasService) {}

  @Query(() => GetPizzaCatalogResponse, {
    description: 'Получить каталог'
  })
  async getCatalog(): Promise<GetPizzaCatalogResponse> {
    return this.pizzaService.getCatalog();
  }

  @Mutation(() => CreatePizzaPaymentResponse, {
    description: 'Оплатить корзину'
  })
  async createPizzaPayment(
    @Args() createPizzaPaymentDto: CreatePizzaPaymentDto
  ): Promise<CreatePizzaPaymentResponse> {
    return this.pizzaService.createPizzaPayment(createPizzaPaymentDto);
  }

  @Query(() => GetPizzaOrdersResponse, {
    description: 'Получить все заказы'
  })
  @AuthorizedOnly()
  async getPizzaOrders(@CurrentUser() user: User): Promise<GetPizzaOrdersResponse> {
    return this.pizzaService.getPizzaOrders(user.phone);
  }

  @Query(() => GetPizzaOrderResponse, {
    description: 'Получить заказ'
  })
  @AuthorizedOnly()
  async getPizzaOrder(
    @Args() getPizzaOrderDto: GetPizzaOrderDto,
    @CurrentUser() user: User
  ): Promise<GetPizzaOrderResponse> {
    return this.pizzaService.getPizzaOrder(getPizzaOrderDto.orderId, user.phone);
  }

  @Mutation(() => BaseResponse, {
    description: 'Отменить заказ'
  })
  @AuthorizedOnly()
  async cancelPizzaOrder(@Args() cancelPizzaOrderDto: CancelPizzaOrderDto): Promise<BaseResponse> {
    return this.cancelPizzaOrder(cancelPizzaOrderDto);
  }
}
