import type { Document } from 'mongoose';

import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

import { Pizza, PizzaAddress, PizzaPerson } from '../../entities';

export enum PizzaStatus {
  IN_PROCESSING = 'in_processing',
  WAITING_COURIER = 'waiting_courier',
  ON_MY_WAY = 'on_my_way',
  SUCCESS = 'success',
  CANCELED = 'canceled'
}
registerEnumType(PizzaStatus, {
  name: 'PizzaStatus'
});

@InputType('PizzaOrderInput')
@ObjectType()
@Schema({
  collection: 'pizza/order',
  minimize: false,
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
  versionKey: false
})
export class PizzaOrder {
  @ApiProperty({ type: String, description: 'ID заказа' })
  @Field(() => String)
  _id: Types.ObjectId;

  @ApiProperty({ type: [Pizza], description: 'Пиццы' })
  @Field(() => [Pizza])
  @Prop({ required: true })
  pizzas: Pizza[];

  @ApiProperty({ type: Number, description: 'Сумма заказа' })
  @Field(() => Number)
  @Prop({ required: true })
  totalPrice: number;

  @ApiProperty({ type: PizzaPerson, description: 'Данные пользователя' })
  @Field(() => PizzaPerson)
  @Prop({ required: true })
  person: PizzaPerson;

  @ApiProperty({ type: PizzaAddress, description: 'Адрес доставки' })
  @Field(() => PizzaAddress)
  @Prop({ required: true })
  receiverAddress: PizzaAddress;

  @ApiProperty({
    description: 'Статус доставки',
    example: PizzaStatus.IN_PROCESSING,
    enum: PizzaStatus,
    enumName: 'PizzaStatus'
  })
  @Field(() => PizzaStatus)
  @Prop({ required: true, default: PizzaStatus.IN_PROCESSING })
  status: PizzaStatus;

  @ApiProperty({ type: Boolean, description: 'Статус отмены' })
  @Field(() => Boolean)
  @Prop({ required: true, default: true })
  cancellable: boolean;
}

export type PizzaOrderDocument = PizzaOrder & Document;
export const PizzaOrderSchema = SchemaFactory.createForClass(PizzaOrder);
