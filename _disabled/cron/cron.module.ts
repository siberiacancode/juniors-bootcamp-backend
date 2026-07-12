import { Module } from '@nestjs/common';

import { CarRentModule } from '@/modules/cars';
import { DeliveryOrderModule } from '@/modules/delivery';
import { OtpsModule } from '@/modules/otps';
import { PizzaOrderModule } from '@/modules/pizza';

import { CronController } from './cron.controller';

@Module({
  controllers: [CronController],
  imports: [OtpsModule, PizzaOrderModule, DeliveryOrderModule, CarRentModule],
  providers: []
})
export class CronModule {}
