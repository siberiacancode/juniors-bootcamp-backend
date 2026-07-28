import { Module } from '@nestjs/common';

import { AuthModule } from '@/modules/auth';
import { GamesModule } from '@/modules/games';
import { OtpsModule } from '@/modules/otps';
import { UsersModule } from '@/modules/users';

import { TesterController } from './tester.controller';
import { TesterService } from './tester.service';

@Module({
  controllers: [TesterController],
  imports: [AuthModule, GamesModule, OtpsModule, UsersModule],
  providers: [TesterService]
})
export class TesterModule {}
