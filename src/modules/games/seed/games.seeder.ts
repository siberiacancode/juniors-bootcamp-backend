import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GameEntitySchema } from '@/modules/games/game.schema';
import { Seeder } from '@/utils/interfaces';

import { GAMES } from './games.seed';

@Injectable()
export class GamesSeeder implements Seeder {
  constructor(
    @InjectModel(GameEntitySchema.name) private readonly gameModel: Model<GameEntitySchema>
  ) {}

  async seed() {
    await this.gameModel.insertMany(GAMES);

    console.log('🎮 Games seeded');
  }
}
