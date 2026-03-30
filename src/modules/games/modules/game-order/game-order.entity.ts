import type { Document } from 'mongoose';

import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

export enum GameOrderStatus {
  PAID = 'paid',
  CANCELED = 'canceled'
}

registerEnumType(GameOrderStatus, {
  name: 'GameOrderStatus'
});

@InputType('GameOrderPersonInput')
@ObjectType()
export class GameOrderPerson {
  @Field(() => String)
  @ApiProperty({ example: 'Иван', description: 'Имя' })
  firstName: string;

  @Field(() => String)
  @ApiProperty({ example: 'Иванов', description: 'Фамилия' })
  lastName: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'Иванович', description: 'Отчество', required: false })
  middleName?: string;

  @Field(() => String)
  @ApiProperty({ example: '79990001122', description: 'Телефон' })
  phone: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'user@mail.com', description: 'Email', required: false })
  email?: string;
}

@InputType('GameOrderSnapshotInput')
@ObjectType()
export class GameOrderSnapshot {
  @Field(() => String)
  @ApiProperty({ example: '1', description: 'ID игры' })
  gameId: string;

  @Field(() => String)
  @ApiProperty({ example: 'Battlefield 2042', description: 'Название игры' })
  name: string;

  @Field(() => String)
  @ApiProperty({ example: '/static/images/pizza/1.webp', description: 'Картинка игры' })
  image: string;

  @Field(() => Number)
  @ApiProperty({ example: 968, description: 'Цена на момент заказа' })
  price: number;

  @Field(() => String)
  @ApiProperty({ example: '1517290', description: 'Внешний ID' })
  externalId: string;
}

@InputType('GameOrderInput')
@ObjectType()
@Schema({
  collection: 'games/order',
  versionKey: false,
  minimize: false,
  timestamps: { createdAt: 'created', updatedAt: 'updated' }
})
export class GameOrder {
  @Field(() => String)
  @ApiProperty({ description: 'ID заказа', type: String })
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => GameOrderPerson)
  @Prop({ required: true })
  @ApiProperty({ description: 'Данные покупателя', type: GameOrderPerson })
  person: GameOrderPerson;

  @Field(() => GameOrderSnapshot)
  @Prop({ required: true })
  @ApiProperty({ description: 'Снимок игры на момент заказа', type: GameOrderSnapshot })
  gameSnapshot: GameOrderSnapshot;

  @Field(() => String)
  @Prop({ required: true })
  @ApiProperty({ example: 'XXXX-YYYY-ZZZZ', description: 'Сгенерированный игровой ключ' })
  gameKey: string;

  @Field(() => GameOrderStatus)
  @Prop({ required: true, default: GameOrderStatus.PAID })
  @ApiProperty({ enum: GameOrderStatus, description: 'Статус заказа' })
  status: GameOrderStatus;
}

export type GameOrderDocument = GameOrder & Document;
export const GameOrderSchema = SchemaFactory.createForClass(GameOrder);
