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
  versionKey: false,
  minimize: false,
  timestamps: { createdAt: 'created', updatedAt: 'updated' }
})
export class PizzaOrder {
  @Field(() => String)
  @ApiProperty({ description: 'ID заказа', type: String })
  _id: Types.ObjectId;

  @Field(() => [Pizza])
  @Prop({ required: true })
  @ApiProperty({ description: 'Пиццы', type: [Pizza] })
  pizzas: Pizza[];

  @Field(() => Number)
  @Prop({ required: true })
  @ApiProperty({ description: 'Сумма заказа', type: Number })
  totalPrice: number;

  @Field(() => PizzaPerson)
  @Prop({ required: true })
  @ApiProperty({ description: 'Данные пользователя', type: PizzaPerson })
  person: PizzaPerson;

  @Field(() => PizzaAddress)
  @Prop({ required: true })
  @ApiProperty({ description: 'Адрес доставки', type: PizzaAddress })
  receiverAddress: PizzaAddress;

  @Field(() => PizzaStatus)
  @Prop({ required: true, default: PizzaStatus.IN_PROCESSING })
  @ApiProperty({
    description: 'Статус доставки',
    enum: PizzaStatus,
    enumName: 'PizzaStatus',
    example: PizzaStatus.IN_PROCESSING
  })
  status: PizzaStatus;

  @Field(() => Boolean)
  @Prop({ required: true, default: true })
  @ApiProperty({ description: 'Статус отмены', type: Boolean })
  cancellable: boolean;
}

export type PizzaOrderDocument = PizzaOrder & Document;
export const PizzaOrderSchema = SchemaFactory.createForClass(PizzaOrder);
