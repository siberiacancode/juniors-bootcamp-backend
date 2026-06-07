import type { Document } from 'mongoose';

import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

import { DeliveryType, Region } from '../../constants';

@InputType('GameOrderPersonInput')
@ObjectType()
export class GameOrderPerson {
  @Field(() => String)
  @ApiProperty({ example: '79990001122', description: 'Телефон' })
  phone: string;

  @Field(() => String)
  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  email: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    required: false,
    example: 'https://example.com/invite',
    description: 'Ссылка на приглашение'
  })
  inviteLink?: string;
}

@InputType('GameOrderSnapshotInput')
@ObjectType()
export class GameOrderSnapshot {
  @Field(() => String)
  @ApiProperty({ example: 'battlefield-2042', description: 'Slug игры' })
  slug: string;

  @Field(() => String)
  @ApiProperty({ example: 'Battlefield 2042', description: 'Название игры' })
  name: string;

  @Field(() => String)
  @ApiProperty({ example: '/static/images/pizza/1.webp', description: 'Картинка игры' })
  image: string;

  @Field(() => Region)
  @ApiProperty({ enum: Region, enumName: 'Region', example: Region.EUROPE, description: 'Регион' })
  region: Region;

  @Field(() => Number)
  @ApiProperty({ example: 968, description: 'Текущая цена' })
  price: number;

  @Field(() => DeliveryType)
  @ApiProperty({
    enum: DeliveryType,
    enumName: 'DeliveryType',
    example: DeliveryType.STEAM_KEY,
    description: 'Способ получения'
  })
  deliveryType: DeliveryType;

  @Field(() => String)
  @ApiProperty({ example: 'Deluxe', description: 'Издание' })
  edition: string;

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
  _id: Types.ObjectId;

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
}

export type GameOrderDocument = GameOrder & Document;
export const GameOrderSchema = SchemaFactory.createForClass(GameOrder);
