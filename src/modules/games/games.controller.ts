import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';
import { Request } from 'express';

import type { User } from '@/modules/users';

import { UsersService } from '@/modules/users';
import { ApiAuthorizedOnly } from '@/utils/guards';
import { AuthService, BaseResolver } from '@/utils/services';

import { GameGenre } from './constants';
import {
  CreateGameOrderDto,
  GetGameDto,
  GetGameOrderDto,
  GetGamesSearchDto,
  SearchGamesDto
} from './dto';
import {
  CreateGameOrderResponse,
  GameOrderResponse,
  GameOrdersResponse,
  GameResponse,
  GameSearchResponse,
  GamesPaginatedResponse
} from './games.model';
import { GamesService } from './games.service';
import { GameOrderService, GameOrderStatus } from './modules';

@ApiTags('🎮 games')
@Controller('/games')
export class GamesController extends BaseResolver {
  constructor(
    private readonly gamesService: GamesService,
    private readonly gameOrderService: GameOrderService,
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {
    super();
  }

  @Get('/info')
  @ApiOperation({ summary: 'Получить игры' })
  @ApiResponse({ status: 200, type: GamesPaginatedResponse })
  @ApiQuery({
    name: 'minYear',
    required: false,
    type: Number,
    description: 'Минимальный год релиза'
  })
  @ApiQuery({
    name: 'maxYear',
    required: false,
    type: Number,
    description: 'Максимальный год релиза'
  })
  @ApiQuery({
    name: 'genre',
    required: false,
    enum: GameGenre,
    enumName: 'GameGenre',
    isArray: true,
    example: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Жанр'
  })
  @ApiQuery({ name: 'search', required: false, type: String, description: 'Поиск' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Страница' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Лимит' })
  getGames(@Query() getGamesSearchDto: GetGamesSearchDto): GamesPaginatedResponse {
    const games = this.gamesService.getFilteredGames(getGamesSearchDto);
    const paginatedGames = this.gamesService.getPagination({
      items: games,
      page: getGamesSearchDto.page,
      limit: getGamesSearchDto.limit
    });

    return this.wrapSuccess(paginatedGames);
  }

  @Get('/search')
  @ApiOperation({ summary: 'Поиск по играм' })
  @ApiResponse({ status: 200, type: GameSearchResponse })
  @ApiQuery({ name: 'search', required: true, type: String, description: 'Строка поиска' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Лимит' })
  searchGames(@Query() searchGamesDto: SearchGamesDto): GameSearchResponse {
    const data = this.gamesService.searchAutocomplete(searchGamesDto);
    return this.wrapSuccess({ data });
  }

  @Get('/info/:slug')
  @ApiOperation({ summary: 'Получить игру' })
  @ApiResponse({ status: 200, type: GameResponse })
  getGame(@Param() getGameDto: GetGameDto): GameResponse {
    const game = this.gamesService.getGame(getGameDto.slug);

    if (!game) {
      throw new BadRequestException(this.wrapFail('Игра не найдена'));
    }

    return this.wrapSuccess({ data: game });
  }

  @Post('/order')
  @ApiOperation({ summary: 'Купить игру и получить ключ' })
  @ApiResponse({ status: 200, type: CreateGameOrderResponse })
  async buyGame(@Body() createGameOrderDto: CreateGameOrderDto): Promise<CreateGameOrderResponse> {
    const game = this.gamesService.getGame(createGameOrderDto.gameSlug);

    if (!game) {
      throw new BadRequestException(this.wrapFail('Игра не найдена'));
    }

    let user = await this.usersService.findOne({ phone: createGameOrderDto.person.phone });

    if (!user) {
      user = await this.usersService.create({
        phone: createGameOrderDto.person.phone
      });
    }

    await this.usersService.findOneAndUpdate(
      { phone: user.phone },
      {
        $set: {
          email: createGameOrderDto.person.email
        }
      }
    );

    const priceVariant = game.priceVariants.find(
      (variant) => variant.id === createGameOrderDto.priceVariantId
    );

    if (!priceVariant) {
      throw new BadRequestException(this.wrapFail('Вариант цены не найден'));
    }

    const order = await this.gameOrderService.create({
      person: createGameOrderDto.person,
      gameSnapshot: {
        deliveryType: priceVariant.deliveryType,
        edition: priceVariant.edition,
        price: priceVariant.price,
        region: priceVariant.region,
        slug: game.slug,
        name: game.name,
        image: game.image,
        externalId: game.externalId
      },
      gameKey: this.generateGameKey(),
      status: GameOrderStatus.PAID
    });

    return this.wrapSuccess({ order });
  }

  @ApiAuthorizedOnly()
  @Get('/orders')
  @ApiOperation({ summary: 'Получить все заказы игр' })
  @ApiResponse({ status: 200, type: GameOrdersResponse })
  @ApiHeader({ name: 'authorization' })
  @ApiBearerAuth()
  async getGameOrders(@Req() request: Request): Promise<GameOrdersResponse> {
    const token = request.headers.authorization.split(' ')[1];
    const decodedJwtAccessToken = (await this.authService.decode(token)) as User;

    if (!decodedJwtAccessToken) {
      throw new BadRequestException(this.wrapFail('Некорректный токен авторизации'));
    }

    const orders = await this.gameOrderService.find({
      $or: [{ 'person.phone': decodedJwtAccessToken.phone }]
    });

    return this.wrapSuccess({ orders });
  }

  @ApiAuthorizedOnly()
  @Get('/orders/:orderId')
  @ApiOperation({ summary: 'Получить заказ игры' })
  @ApiResponse({ status: 200, type: GameOrderResponse })
  @ApiHeader({ name: 'authorization' })
  @ApiBearerAuth()
  async getGameOrder(
    @Param() getGameOrderDto: GetGameOrderDto,
    @Req() request: Request
  ): Promise<GameOrderResponse> {
    const token = request.headers.authorization.split(' ')[1];
    const decodedJwtAccessToken = (await this.authService.decode(token)) as User;

    if (!decodedJwtAccessToken) {
      throw new BadRequestException(this.wrapFail('Некорректный токен авторизации'));
    }

    const order = await this.gameOrderService.findOne({
      _id: getGameOrderDto.orderId,
      $or: [{ 'person.phone': decodedJwtAccessToken.phone }]
    });

    if (!order) {
      throw new BadRequestException(this.wrapFail('Заказ не найден'));
    }

    return this.wrapSuccess({ order });
  }

  private generateGameKey(): string {
    const randomChunk = () => Math.random().toString(36).slice(2, 6).toUpperCase();
    return `${randomChunk()}-${randomChunk()}-${randomChunk()}-${randomChunk()}`;
  }
}
