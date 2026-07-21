import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from '@/utils/base';
import { Result } from '@/utils/helpers';

import { UsersService } from '../users';
import { CreatePizzaPaymentDto } from './dto';
import { PizzaOrdersService, PizzaStatus } from './modules/pizza-orders';
import { PizzaEntitySchema } from './pizza.schema';
import { TOPPINGS } from './pizzas.constants';
import { CreatePizzaPaymentResponse, GetPizzaCatalogResponse } from './responses';

@Injectable()
export class PizzasService extends BaseService<PizzaEntitySchema> {
  constructor(
    @InjectModel(PizzaEntitySchema.name) private readonly pizzaModel: Model<PizzaEntitySchema>,
    private readonly pizzaOrdersService: PizzaOrdersService,
    private readonly usersService: UsersService
  ) {
    super(pizzaModel);
  }

  async getCatalog(): Promise<GetPizzaCatalogResponse> {
    const pizzas = await this.findMany();
    return Result.success({ catalog: pizzas });
  }

  async createPizzaPayment(
    createPizzaPaymentDto: CreatePizzaPaymentDto
  ): Promise<CreatePizzaPaymentResponse> {
    const { person, receiverAddress } = createPizzaPaymentDto;

    const pizzas = await Promise.all(
      createPizzaPaymentDto.pizzas.map(async (orderedPizza) => {
        const pizza = await this.pizzaModel.findById(orderedPizza._id);

        if (!pizza)
          throw new BadRequestException(Result.fail(`Пицца ${orderedPizza._id} не найдена`));

        const filteredPizza = {
          ...pizza,
          toppings: TOPPINGS.filter((topping) => orderedPizza.toppings.includes(topping.type)),
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

        return { ...filteredPizza, totalPrice };
      })
    );

    const totalPrice = pizzas.reduce((acc, pizza) => acc + pizza.totalPrice, 0);

    const order = await this.pizzaOrdersService.create({
      pizzas,
      person,
      receiverAddress,
      status: PizzaStatus.IN_PROCESSING,
      cancellable: true,
      totalPrice
    });

    const user = await this.usersService.findOrCreateUser(person.phone);

    await this.usersService.updateOne(
      { phone: user.phone },
      {
        $set: {
          firstname: person.firstname,
          lastname: person.lastname,
          middlename: person.middlename
        }
      }
    );

    return Result.success({ order });
  }

  async getPizzaOrders(phone: string) {
    const orders = await this.pizzaOrdersService.findMany({
      'person.phone': phone
    });

    return Result.success({ orders });
  }

  async getPizzaOrder(orderId: string, phone: string) {
    const order = await this.pizzaOrdersService.findById(orderId);

    if (!order || order.person.phone !== phone) {
      throw new BadRequestException(Result.fail(`Заказ ${orderId} не найден`));
    }

    return Result.success({ order });
  }

  async cancelPizzaOrder(orderId: string) {
    const order = await this.pizzaOrdersService.findById(orderId);

    if (!order) {
      throw new BadRequestException(Result.fail(`Заказ ${orderId} не найден`));
    }

    if (order.status > PizzaStatus.IN_PROCESSING) {
      throw new BadRequestException(Result.fail('Заказ нельзя отменить'));
    }

    const updatedOrder = await this.pizzaOrdersService.updateById(orderId, {
      $set: { status: PizzaStatus.CANCELED }
    });

    return Result.success({ order: updatedOrder });
  }
}
