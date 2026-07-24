import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TransactionsModule } from '@/modules/transactions';
import { UsersModule } from '@/modules/users';

import { GameEntitySchema, GameSchema } from './game.schema';
import { GamesController } from './games.controller';
import { GamesMutation } from './games.mutation';
import { GamesQuery } from './games.query';
import { GamesService } from './games.service';
import { GameOrderModule } from './modules';
import { GamesSeeder } from './seed';

@Module({
  controllers: [GamesController],
  exports: [GamesService],
  imports: [
    UsersModule,
    TransactionsModule,
    GameOrderModule,
    MongooseModule.forFeature([{ name: GameEntitySchema.name, schema: GameSchema }])
  ],
  providers: [GamesService, GamesQuery, GamesMutation, GamesSeeder]
})
export class GamesModule {}
