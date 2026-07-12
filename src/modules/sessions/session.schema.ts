import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { ClientType } from './sessions.enums';

@ObjectType({ description: 'Сессия' })
@Schema({
  collection: 'sessions',
  timestamps: {
    createdAt: true,
    updatedAt: false
  }
})
export class SessionEntitySchema {
  createdAt: Date;

  @Prop({ required: true, index: true })
  expiresAt: Date;

  @Prop({ type: Types.ObjectId, required: true, index: true, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ enum: ClientType, required: true })
  clientType: ClientType;
}

export type SessionDocument = HydratedDocument<SessionEntitySchema>;
export const SessionSchema = SchemaFactory.createForClass(SessionEntitySchema);

SessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
