import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { BaseResponse } from '@/utils/base';

import { PizzaOrder } from '../modules/pizza-orders';

@ObjectType()
export class CreatePizzaPaymentResponse extends BaseResponse {
  @ApiProperty({ type: PizzaOrder, description: 'Доставка' })
  @Field(() => PizzaOrder)
  order: PizzaOrder;
}
