import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from '@/utils/services';

import type { GameOrderDocument } from './game-order.entity';

import { GameOrder } from './game-order.entity';

@Injectable()
export class GameOrderService extends BaseService<GameOrderDocument> {
  constructor(@InjectModel(GameOrder.name) private GameOrderModel: Model<GameOrderDocument>) {
    super(GameOrderModel);
  }
}
