import { NestFactory } from '@nestjs/core';
import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

import { AppModule } from './app.module';
import { GamesSeeder } from './modules/games/seed';
import { PizzasSeeder } from './modules/pizzas/seed';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const connection = app.get<Connection>(getConnectionToken());

  await connection.dropDatabase();

  console.log('🗑️ Database dropped');

  await app.get(PizzasSeeder).seed();
  await app.get(GamesSeeder).seed();

  await app.close();
}

bootstrap();
