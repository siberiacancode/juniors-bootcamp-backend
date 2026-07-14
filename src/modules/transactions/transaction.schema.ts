import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { TransactionOrderType, TransactionStatus } from './transactions.enums';

@ObjectType({ description: 'Транзакция' })
@Schema({
  collection: 'transactions',
  minimize: false,
  versionKey: false
})
export class TransactionEntitySchema {
  @Prop({ required: true, index: true })
  phone: string;

  @Prop({ required: false, default: null, index: true })
  orderId?: string | null;

  @Prop({
    enum: Object.values(TransactionOrderType),
    required: true
  })
  orderType: TransactionOrderType;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  currency: string;

  @Prop({
    enum: Object.values(TransactionStatus),
    required: true,
    default: TransactionStatus.PENDING
  })
  status: TransactionStatus;

  @Prop({ required: true, index: true, unique: true })
  payLinkToken: string;

  @Prop({ required: false, default: null })
  cardCryptoPacket?: string | null;

  @Prop({ required: false, default: null })
  paidAt?: Date | null;
}

export type TransactionDocument = HydratedDocument<TransactionEntitySchema>;
export const TransactionSchema = SchemaFactory.createForClass(TransactionEntitySchema);
