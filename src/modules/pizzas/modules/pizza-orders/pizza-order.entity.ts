import { Field, GraphQLISODateTime, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

import { Pizza, PizzaAddress, PizzaPerson } from '../../entities';
import { PizzaStatus } from './pizza-orders.enums';

@InputType('PizzaOrderInput')
@ObjectType()
export class PizzaOrder {
  @ApiProperty({ type: String, description: 'ID заказа' })
  @Field(() => String)
  _id: Types.ObjectId;

  @ApiProperty({ type: Date, description: 'Дата создания заказа' })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @ApiProperty({ type: Date, description: 'Дата обновления заказа' })
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @ApiProperty({ type: [Pizza], description: 'Пиццы' })
  @Field(() => [Pizza])
  pizzas: Pizza[];

  @ApiProperty({ type: Number, description: 'Сумма заказа' })
  @Field(() => Number)
  totalPrice: number;

  @ApiProperty({ type: PizzaPerson, description: 'Данные пользователя' })
  @Field(() => PizzaPerson)
  person: PizzaPerson;

  @ApiProperty({ type: PizzaAddress, description: 'Адрес доставки' })
  @Field(() => PizzaAddress)
  receiverAddress: PizzaAddress;

  @ApiProperty({
    description: 'Статус доставки',
    example: PizzaStatus.IN_PROCESSING,
    enum: PizzaStatus,
    enumName: 'PizzaStatus'
  })
  @Field(() => PizzaStatus)
  status: PizzaStatus;

  @ApiProperty({ type: Boolean, description: 'Статус отмены' })
  @Field(() => Boolean)
  cancellable: boolean;
}
