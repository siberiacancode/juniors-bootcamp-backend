import type { FastifyRequest } from 'fastify';

import { BadRequestException, Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import type { User } from '@/modules/users';

import { UsersService } from '@/modules/users';
import { AuthorizedOnlyGuard } from '@/modules/auth';
import { AuthService, BaseResolver, BaseResponse } from '@/utils/services';

import { CancelPizzaOrderDto, CreatePizzaPaymentDto, GetPizzaOrderDto } from './dto';
import { PizzaOrderService, PizzaStatus } from './modules/pizza-order';
import {
  PizzaOrderResponse,
  PizzaOrdersResponse,
  PizzaPaymentResponse,
  PizzasResponse
} from './pizza.model';
import { PizzaService } from './pizza.service';

@ApiTags('🍕 pizza')
@Controller('/pizza')
export class PizzaController extends BaseResolver {
  constructor(
    private readonly pizzaService: PizzaService,
    private readonly pizzaOrderService: PizzaOrderService,
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {
    super();
  }

  @ApiOperation({ summary: 'Получить пиццы' })
  @ApiResponse({
    type: PizzasResponse,
    description: 'catalog',
    status: 200
  })
  @Get('/catalog')
  getPizzasCatalog(): PizzasResponse {
    return this.wrapSuccess({ catalog: this.pizzaService.getPizzas() });
  }

  @ApiOperation({ summary: 'Оплатить корзину' })
  @ApiResponse({
    type: PizzaPaymentResponse,
    description: 'payment',
    status: 200
  })
  @Post('/payment')
  async createPizzaPayment(
    @Args() createPizzaPaymentDto: CreatePizzaPaymentDto
  ): Promise<PizzaPaymentResponse> {
    const { person, receiverAddress } = createPizzaPaymentDto;

    const { pizzas, totalPrice } = createPizzaPaymentDto.pizzas.reduce(
      (acc, orderedPizza) => {
        const pizza = this.pizzaService.getPizza(orderedPizza.id);
        const filteredPizza = {
          ...pizza,
          toppings: pizza.toppings.filter((topping) =>
            orderedPizza.toppings.includes(topping.type)
          ),
          doughs: pizza.doughs.filter((dough) => dough.type === orderedPizza.dough),
          sizes: pizza.sizes.filter((size) => size.type === orderedPizza.size)
        };

        const toppingPrice = filteredPizza.toppings.reduce(
          (acc, topping) => acc + topping.price,
          0
        );
        const doughPrice = filteredPizza.doughs[0].price;
        const sizePrice = filteredPizza.sizes[0].price;
        const totalPrice = toppingPrice + doughPrice + sizePrice;

        acc.pizzas.push({ ...filteredPizza, totalPrice });
        acc.totalPrice += totalPrice;

        return acc;
      },
      { pizzas: [], totalPrice: 0 }
    );

    const order = await this.pizzaOrderService.create({
      pizzas,
      person,
      receiverAddress,
      status: PizzaStatus.IN_PROCESSING,
      cancellable: true,
      totalPrice
    });

    let user = await this.usersService.findOne({ phone: person.phone });

    if (!user) {
      user = await this.usersService.create({ phone: person.phone });
    }

    await this.usersService.findOneAndUpdate(
      { phone: user.phone },
      {
        $set: {
          firstname: person.firstname,
          lastname: person.lastname,
          middlename: person.middlename
        }
      }
    );

    return this.wrapSuccess({ order });
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Получить все заказы' })
  @ApiResponse({
    type: PizzaOrdersResponse,
    description: 'orders',
    status: 200
  })
  @Get('/orders')
  @AuthorizedOnly()
  async getPizzaOrders(@Req() request: FastifyRequest): Promise<PizzaOrdersResponse> {
    const token = request.headers.authorization.split(' ')[1];
    const decodedJwtAccessToken = (await this.authService.decode(token)) as User;

    if (!decodedJwtAccessToken) {
      throw new BadRequestException(this.wrapFail('Некорректный токен авторизации'));
    }

    const orders = await this.pizzaOrderService.find({
      $or: [{ 'person.phone': decodedJwtAccessToken.phone }]
    });

    return this.wrapSuccess({ orders });
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Получить заказ' })
  @ApiResponse({
    type: PizzaOrderResponse,
    description: 'order',
    status: 200
  })
  @Get('/orders/:orderId')
  @AuthorizedOnly()
  async getPizzaOrder(
    @Param() getPizzaOrderDto: GetPizzaOrderDto,
    @Req() request: FastifyRequest
  ): Promise<PizzaOrderResponse> {
    const token = request.headers.authorization.split(' ')[1];
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

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Отменить заказ' })
  @ApiResponse({
    type: BaseResponse,
    description: 'order cancel',
    status: 200
  })
  @Put('/orders/cancel')
  @AuthorizedOnly()
  async cancelPizzaOrder(@Body() cancelPizzaOrderDto: CancelPizzaOrderDto): Promise<BaseResponse> {
    const order = await this.pizzaOrderService.findOne({ _id: cancelPizzaOrderDto.orderId });

    if (!order) {
      throw new BadRequestException(this.wrapFail('Заказ не найден'));
    }

    if (order.status > PizzaStatus.IN_PROCESSING) {
      throw new BadRequestException(this.wrapFail('Заказ нельзя отменить'));
    }

    await this.pizzaOrderService.updateOne(
      { _id: cancelPizzaOrderDto.orderId },
      { $set: { status: PizzaStatus.CANCELED } }
    );

    return this.wrapSuccess();
  }
}
