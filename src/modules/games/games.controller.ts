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
    name: 'year',
    required: false,
    type: Number,
    isArray: true,
    description: 'Год релиза'
  })
  @ApiQuery({
    name: 'genre',
    required: false,
    enum: ['action'],
    isArray: true,
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

  @Get('/info/:gameId')
  @ApiOperation({ summary: 'Получить игру' })
  @ApiResponse({ status: 200, type: GameResponse })
  getGame(@Param() getGameDto: GetGameDto): GameResponse {
    const game = this.gamesService.getGame(getGameDto.gameId);

    if (!game) {
      throw new BadRequestException(this.wrapFail('Игра не найдена'));
    }

    return this.wrapSuccess({ data: game });
  }

  @Post('/order')
  @ApiOperation({ summary: 'Купить игру и получить ключ' })
  @ApiResponse({ status: 200, type: CreateGameOrderResponse })
  async buyGame(@Body() createGameOrderDto: CreateGameOrderDto): Promise<CreateGameOrderResponse> {
    const game = this.gamesService.getGame(createGameOrderDto.gameId);

    if (!game) {
      throw new BadRequestException(this.wrapFail('Игра не найдена'));
    }

    let user = await this.usersService.findOne({ phone: createGameOrderDto.person.phone });

    if (!user) {
      user = await this.usersService.create({ phone: createGameOrderDto.person.phone });
    }

    await this.usersService.findOneAndUpdate(
      { phone: user.phone },
      {
        $set: {
          firstname: createGameOrderDto.person.firstName,
          lastname: createGameOrderDto.person.lastName,
          middlename: createGameOrderDto.person.middleName,
          email: createGameOrderDto.person.email
        }
      }
    );

    const order = await this.gameOrderService.create({
      person: createGameOrderDto.person,
      gameSnapshot: {
        gameId: game.id,
        name: game.name,
        image: game.image,
        price: game.price,
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
