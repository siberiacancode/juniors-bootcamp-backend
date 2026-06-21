import { Module } from '@nestjs/common';

import { OtpsModule } from '@/modules/otps';
import { UsersModule } from '@/modules/users';
import { AuthModule } from '@/utils/services';

import { GamesService } from '../games/games.service';
import { GameOrderModule } from '../games/modules';
import { TesterController } from './tester.controller';

@Module({
  controllers: [TesterController],
  imports: [UsersModule, OtpsModule, AuthModule, GameOrderModule],
  providers: [GamesService]
})
export class TesterModule {}
