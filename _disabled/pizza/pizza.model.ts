import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { Pizza } from '@/modules/pizza/entities/pizza.entity';
import { PizzaOrder } from '@/modules/pizza/modules/pizza-order/pizza-order.entity';
import { BaseResponse } from '@/utils/services';

@ObjectType()
export class PizzasResponse extends BaseResponse {
  @ApiProperty({ type: [Pizza], description: 'Пиццы' })
  @Field(() => [Pizza])
  catalog: Pizza[];
}

@ObjectType()
export class PizzaPaymentResponse extends BaseResponse {
  @ApiProperty({ type: PizzaOrder, description: 'Доставка' })
  @Field(() => PizzaOrder)
  order: PizzaOrder;
}

@ObjectType()
export class PizzaOrdersResponse extends BaseResponse {
  @ApiProperty({ type: [PizzaOrder], description: 'Доставки' })
  @Field(() => [PizzaOrder])
  orders: PizzaOrder[];
}

@ObjectType()
export class PizzaOrderResponse extends BaseResponse {
  @ApiProperty({ type: PizzaOrder, description: 'Доставки' })
  @Field(() => PizzaOrder)
  order: PizzaOrder;
}
