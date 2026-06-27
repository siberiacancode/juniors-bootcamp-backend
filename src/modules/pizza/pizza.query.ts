import type { FastifyRequest } from 'fastify';

import { BadRequestException } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';

import { DescribeContext } from '@/utils/decorators';
import { GqlAuthorizedOnly } from '@/utils/guards';
import { AuthService, BaseResolver } from '@/utils/services';

import type { User } from '../users';

import { GetPizzaOrderDto } from './dto';
import { PizzaOrderService } from './modules/pizza-order';
import { PizzaOrderResponse, PizzaOrdersResponse, PizzasResponse } from './pizza.model';
import { PizzaService } from './pizza.service';

@Resolver('🍕 pizza query')
@DescribeContext('PizzaQuery')
@Resolver()
export class PizzaQuery extends BaseResolver {
  constructor(
    private readonly pizzaService: PizzaService,
    private readonly authService: AuthService,
    private readonly pizzaOrderService: PizzaOrderService
  ) {
    super();
  }

  @Query(() => PizzasResponse)
  getPizzasCatalog(): PizzasResponse {
    return this.wrapSuccess({ catalog: this.pizzaService.getPizzas() });
  }

  @GqlAuthorizedOnly()
  @Query(() => PizzaOrdersResponse)
  async getPizzaOrders(@Context() context: { req: FastifyRequest }): Promise<PizzaOrdersResponse> {
    const token = context.req.headers.authorization.split(' ')[1];
    const decodedJwtAccessToken = (await this.authService.decode(token)) as User;

    if (!decodedJwtAccessToken) {
      throw new BadRequestException(this.wrapFail('Некорректный токен авторизации'));
    }

    const orders = await this.pizzaOrderService.find({
      $or: [{ 'person.phone': decodedJwtAccessToken.phone }]
    });

    return this.wrapSuccess({ orders });
  }

  @GqlAuthorizedOnly()
  @Query(() => PizzaOrderResponse)
  async getPizzaOrder(
    @Args() getPizzaOrderDto: GetPizzaOrderDto,
    @Context() context: { req: FastifyRequest }
  ): Promise<PizzaOrderResponse> {
    const token = context.req.headers.authorization.split(' ')[1];
    const decodedJwtAccessToken = (await this.authService.decode(token)) as User;

    if (!decodedJwtAccessToken) {
      throw new BadRequestException(this.wrapFail('Некорректный токен авторизации'));
    }

    const order = await this.pizzaOrderService.findOne({
      _id: getPizzaOrderDto.orderId,
      $or: [{ 'person.phone': decodedJwtAccessToken.phone }]
    });

    if (!order) {
      throw new BadRequestException(this.wrapFail('Заказ не найден'));
    }

    return this.wrapSuccess({ order });
  }
}
