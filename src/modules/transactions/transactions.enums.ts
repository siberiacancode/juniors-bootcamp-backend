import { registerEnumType } from '@nestjs/graphql';

export enum TransactionStatus {
  PENDING = 'pending',
  PAID = 'paid',
  FAILED = 'failed'
}

registerEnumType(TransactionStatus, {
  name: 'TransactionStatus',
  description: 'Статус транзакции'
});

export enum TransactionOrderType {
  CAR = 'car',
  DELIVERY = 'delivery',
  PIZZA = 'pizza',
  CINEMA = 'cinema',
  GAME = 'game'
}

registerEnumType(TransactionOrderType, {
  name: 'TransactionOrderType',
  description: 'Тип заказа'
});
