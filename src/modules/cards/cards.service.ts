import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { BaseService } from '@/utils/base';
import { Result } from '@/utils/helpers';

import { CardEntitySchema } from './card.schema';
import { DeleteCardResponse, GetCardsResponse } from './responses';

@Injectable()
export class CardsService extends BaseService<CardEntitySchema> {
  constructor(
    @InjectModel(CardEntitySchema.name) private readonly cardModel: Model<CardEntitySchema>
  ) {
    super(cardModel);
  }

  async getCards(phone: string): Promise<GetCardsResponse> {
    const cards = await this.findMany({ phone });

    return Result.success({ cards });
  }

  async deleteCard(phone: string, cardId: string): Promise<DeleteCardResponse> {
    if (!Types.ObjectId.isValid(cardId)) {
      throw new BadRequestException(Result.fail('Некорректный ID карты'));
    }

    const deletedCard = await this.deleteOne({
      _id: cardId,
      phone
    });

    if (!deletedCard) {
      throw new BadRequestException(Result.fail('Карта не найдена'));
    }

    return Result.success({ id: String(deletedCard._id) });
  }
}
