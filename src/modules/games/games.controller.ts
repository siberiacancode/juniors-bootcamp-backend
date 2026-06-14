import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
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

import { DeliveryType, GameFilter, GameGenre, GameView, Region } from './constants';
import {
  CreateGameOrderDto,
  GetEditionsDto,
  GetGameDto,
  GetGameOrderDto,
  GetGamesDto,
  GetRegionsDto,
  SearchGamesDto
} from './dto';
import {
  CreateGameOrderResponse,
  EditionsResponse,
  GameOrderResponse,
  GameOrdersResponse,
  GameResponse,
  GameSearchResponse,
  GamesPaginatedResponse,
  RegionsResponse
} from './games.model';
import { GamesService } from './games.service';
import { GameOrderService } from './modules';

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
    name: 'filter',
    required: false,
    enum: GameFilter,
    enumName: 'GameFilter',
    isArray: true,
    example: [GameFilter.DISCOUNT, GameFilter.DLC],
    description: 'Дополнительные фильтры'
  })
  @ApiQuery({
    required: false,
    name: 'view',
    enum: GameView,
    example: GameView.POPULAR,
    enumName: 'GameView',
    description: 'Предустановленный вид выборки'
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
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Страница' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Лимит' })
  getGames(@Query() getGamesSearchDto: GetGamesDto): GamesPaginatedResponse {
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
    const games = this.gamesService.searchAutocomplete(searchGamesDto);
    return this.wrapSuccess({ games });
  }

  @Get('/info/:slug')
  @ApiOperation({ summary: 'Получить игру' })
  @ApiResponse({ status: 200, type: GameResponse })
  getGame(@Param() getGameDto: GetGameDto): GameResponse {
    const game = this.gamesService.getGame(getGameDto.slug);

    if (!game) {
      throw new NotFoundException(this.wrapFail('Игра не найдена'));
    }

    return this.wrapSuccess({ game });
  }

  @Get('/regions')
  @ApiOperation({ summary: 'Получить регионы для способа получения' })
  @ApiResponse({ status: 200, type: RegionsResponse })
  @ApiQuery({
    name: 'slug',
    required: true,
    type: String,
    description: 'Slug игры'
  })
  @ApiQuery({
    name: 'deliveryType',
    required: true,
    enum: DeliveryType,
    example: DeliveryType.STEAM_GIFT,
    enumName: 'DeliveryType',
    description: 'Тип доставки'
  })
  getRegions(@Query() getRegionsDto: GetRegionsDto): RegionsResponse {
    const regions = this.gamesService.getRegions(getRegionsDto);

    if (!regions) {
      throw new NotFoundException(this.wrapFail('Регионы не найдены'));
    }

    return this.wrapSuccess({ regions });
  }

  @Get('/editions')
  @ApiOperation({ summary: 'Получить издания для региона' })
  @ApiResponse({ status: 200, type: EditionsResponse })
  @ApiQuery({
    name: 'slug',
    required: true,
    type: String,
    description: 'Slug игры'
  })
  @ApiQuery({
    name: 'deliveryType',
    required: true,
    enum: DeliveryType,
    example: DeliveryType.STEAM_GIFT,
    enumName: 'DeliveryType',
    description: 'Тип доставки'
  })
  @ApiQuery({
    name: 'region',
    required: true,
    enum: Region,
    example: Region.RU,
    enumName: 'Region',
    description: 'Регион'
  })
  getEditions(@Query() getEditionsDto: GetEditionsDto): EditionsResponse {
    const editions = this.gamesService.getEditions(getEditionsDto);

    if (!editions) {
      throw new NotFoundException(this.wrapFail('Издания не найдены'));
    }

    return this.wrapSuccess({ editions });
  }

  @Post('/order')
  @ApiOperation({ summary: 'Купить игру и получить ключ' })
  @ApiResponse({ status: 200, type: CreateGameOrderResponse })
  async createGameOrder(
    @Body() createGameOrderDto: CreateGameOrderDto
  ): Promise<CreateGameOrderResponse> {
    const game = this.gamesService.findGame(createGameOrderDto.gameSlug);

    if (!game) {
      throw new NotFoundException(this.wrapFail('Игра не найдена'));
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
      (variant) =>
        createGameOrderDto.deliveryType === variant.deliveryType &&
        createGameOrderDto.edition === variant.edition &&
        createGameOrderDto.region === variant.region
    );

    if (
      priceVariant?.deliveryType === DeliveryType.STEAM_GIFT &&
      !createGameOrderDto.person.inviteLink
    ) {
      throw new BadRequestException(
        this.wrapFail('При заказе Steam Gift необходимо указать ссылку приглашения')
      );
    }

    if (!priceVariant) {
      throw new NotFoundException(this.wrapFail('Вариант цены не найден'));
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
        image: game.image
      },
      ...(priceVariant.deliveryType !== DeliveryType.STEAM_GIFT && {
        gameKey: this.gameOrderService.generateGameKey()
      })
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
      throw new NotFoundException(this.wrapFail('Заказ не найден'));
    }

    return this.wrapSuccess({ order });
  }
}
