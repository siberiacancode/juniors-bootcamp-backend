import type { HydratedDocument } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Pizza, PizzaAddress, PizzaPerson } from '../../entities';
import { PizzaStatus } from './pizza-orders.enums';

@Schema({
  collection: 'pizzas/orders',
  timestamps: true
})
export class PizzaOrderEntitySchema {
  createdAt: Date;
  updatedAt: Date;

  @Prop({ required: true })
  pizzas: Pizza[];

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  person: PizzaPerson;

  @Prop({ required: true })
  receiverAddress: PizzaAddress;

  @Prop({ required: true, default: PizzaStatus.IN_PROCESSING })
  status: PizzaStatus;

  @Prop({ required: true, default: true })
  cancellable: boolean;
}

export type PizzaOrderDocument = HydratedDocument<PizzaOrderEntitySchema>;
export const PizzaOrderSchema = SchemaFactory.createForClass(PizzaOrderEntitySchema);
