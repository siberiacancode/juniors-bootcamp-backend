import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CurrentUser } from '@/utils/decorators';
import { AuthorizedOnly } from '@/utils/guards';

import { User } from '../users';
import { CardsService } from './cards.service';
import { DeleteCardResponse, GetCardsResponse } from './responses';

@ApiTags('💳 cards')
@Controller('users')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Получить список сохраненных карт пользователя' })
  @ApiResponse({
    type: GetCardsResponse,
    description: 'get user cards',
    status: 200
  })
  @Get('/cards')
  @AuthorizedOnly()
  async getCards(@CurrentUser() user: User): Promise<GetCardsResponse> {
    return this.cardsService.getCards(user.phone);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Удалить сохраненную карту пользователя' })
  @ApiResponse({
    type: DeleteCardResponse,
    description: 'delete user card',
    status: 200
  })
  @Delete('/cards/:id')
  @AuthorizedOnly()
  async deleteCard(
    @CurrentUser() user: User,
    @Param('id') cardId: string
  ): Promise<DeleteCardResponse> {
    return this.cardsService.deleteCard(user.phone, cardId);
  }
}
