import { Field, GraphQLISODateTime, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

import { TransactionOrderType, TransactionStatus } from './transactions.enums';

@InputType('TransactionInput')
@ObjectType()
export class Transaction {
  @ApiProperty({ type: String, description: 'ID транзакции' })
  @Field(() => String)
  _id: Types.ObjectId;

  @ApiProperty({ description: 'Телефон владельца транзакции', example: '89990009999' })
  @Field(() => String)
  phone: string;

  @ApiProperty({
    type: String,
    description: 'ID заказа, связанного с транзакцией',
    nullable: true,
    required: false
  })
  @Field(() => String, { nullable: true })
  orderId?: string | null;

  @ApiProperty({
    description: 'Тип заказа, связанного с транзакцией',
    enum: TransactionOrderType,
    enumName: 'TransactionOrderType'
  })
  @Field(() => TransactionOrderType)
  orderType: TransactionOrderType;

  @ApiProperty({ description: 'Сумма транзакции', example: 1290 })
  @Field(() => Number)
  amount: number;

  @ApiProperty({ description: 'Валюта транзакции', example: 'RUB' })
  @Field(() => String)
  currency: string;

  @ApiProperty({ enum: TransactionStatus, enumName: 'TransactionStatus' })
  @Field(() => TransactionStatus)
  status: TransactionStatus;

  @ApiProperty({ description: 'Токен платежной ссылки', example: 'pay_link_token_value' })
  @Field(() => String)
  payLinkToken: string;

  @ApiProperty({
    type: String,
    description: 'Крипто-пакет карты в base64-формате',
    nullable: true,
    required: false
  })
  @Field(() => String, { nullable: true })
  cardCryptoPacket?: string | null;

  @ApiProperty({ type: Date, description: 'Дата оплаты', nullable: true, required: false })
  @Field(() => GraphQLISODateTime, { nullable: true })
  paidAt?: Date | null;
}
