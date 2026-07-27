import type { FastifyReply } from 'fastify';

import { Body, Controller, Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import type { User } from '@/modules/users';

import { SignInDto } from '@/modules/auth/dto';
import { SignInResponse } from '@/modules/auth/responses';
import { CreateOtpDto } from '@/modules/otps/dto';
import { CreateOtpResponse } from '@/modules/otps/responses';
import { ClientType } from '@/modules/sessions';
import { UpdateProfileDto } from '@/modules/users/dto';
import { GetProfileResponse, UpdateProfileResponse } from '@/modules/users/responses';
import { CurrentUser } from '@/utils/decorators';
import { AuthorizedOnly } from '@/utils/guards';

import { GameDeliveryType, GameFilter, GameGenre, GameRegion, GameView } from '../games/constants';
import {
  CreateGameOrderDto,
  GetGameDto,
  GetGameOrderDto,
  GetGamePaidOrderDto,
  GetGamePriceVariantsDto,
  GetGameRegionsDto,
  GetGamesSearchDto,
  SearchGamesDto
} from '../games/dto';
import {
  CreateGameOrderResponse,
  GameOrderResponse,
  GameOrdersResponse,
  GamePriceVariantsResponse,
  GameRegionsResponse,
  GameResponse,
  GameSearchResponse,
  GamesPaginatedResponse
} from '../games/games.model';
import { TesterService } from './tester.service';

@ApiTags('🧪 tester')
@Controller('tester')
export class TesterController {
  constructor(private readonly testerService: TesterService) {}

  @ApiOperation({ summary: 'Создание отп кода для tester' })
  @ApiResponse({
    type: CreateOtpResponse,
    description: 'create otp',
    status: 200
  })
  @Post('/auth/otp')
  async createOtp(@Body() createOtpDto: CreateOtpDto): Promise<CreateOtpResponse> {
    return this.testerService.createOtp(createOtpDto);
  }

  @ApiHeader({
    example: ClientType.MOBILE,
    enum: ClientType,
    required: false,
    name: 'x-application'
  })
  @ApiOperation({ summary: 'Авторизация для tester' })
  @ApiResponse({
    type: SignInResponse,
    description: 'sign-in',
    status: 200
  })
  @Post('/users/signin')
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) reply: FastifyReply
  ): Promise<SignInResponse> {
    return this.testerService.signIn(signInDto, reply);
  }

  @ApiOperation({ summary: 'Обновить профиль пользователя для tester' })
  @ApiResponse({
    type: UpdateProfileResponse,
    description: 'update profile',
    status: 200
  })
  @Patch('/users/profile')
  @AuthorizedOnly()
  async updateProfile(
    @Body() updateProfileDto: UpdateProfileDto,
    @CurrentUser() user: User
  ): Promise<UpdateProfileResponse> {
    return this.testerService.updateProfile(user, updateProfileDto);
  }

  @ApiOperation({ summary: 'Получить сессию пользователя для tester' })
  @ApiResponse({
    type: GetProfileResponse,
    description: 'session',
    status: 200
  })
  @Get('/users/session')
  @AuthorizedOnly()
  getSession(@CurrentUser() user: User): GetProfileResponse {
    return this.testerService.getSession(user);
  }

  @ApiOperation({ summary: 'Получить игры для tester' })
  @ApiQuery({
    description: 'Дополнительные фильтры',
    example: [GameFilter.DISCOUNT, GameFilter.DLC],
    enum: GameFilter,
    isArray: true,
    required: false,
    enumName: 'GameFilter',
    name: 'filter'
  })
  @ApiQuery({
    description: 'Предустановленный вид выборки',
    example: GameView.POPULAR,
    enum: GameView,
    required: false,
    enumName: 'GameView',
    name: 'view'
  })
  @ApiQuery({
    description: 'Жанр',
    example: [GameGenre.ACTION, GameGenre.RPG],
    enum: GameGenre,
    isArray: true,
    required: false,
    enumName: 'GameGenre',
    name: 'genre'
  })
  @ApiQuery({ type: Number, description: 'Страница', required: false, name: 'page' })
  @ApiQuery({ type: Number, description: 'Лимит', required: false, name: 'limit' })
  @ApiResponse({ type: GamesPaginatedResponse, status: 200 })
  @Get('/games/info')
  async getGames(@Query() getGamesSearchDto: GetGamesSearchDto): Promise<GamesPaginatedResponse> {
    return this.testerService.getGames(getGamesSearchDto);
  }

  @ApiOperation({ summary: 'Поиск по играм для tester' })
  @ApiQuery({ type: String, description: 'Строка поиска', required: true, name: 'search' })
  @ApiQuery({ type: Number, description: 'Лимит', required: false, name: 'limit' })
  @ApiResponse({ type: GameSearchResponse, status: 200 })
  @Get('/games/search')
  async searchGames(@Query() searchGamesDto: SearchGamesDto): Promise<GameSearchResponse> {
    return this.testerService.searchGames(searchGamesDto);
  }

  @ApiOperation({ summary: 'Получить игру для tester' })
  @ApiResponse({ type: GameResponse, status: 200 })
  @Get('/games/info/:slug')
  async getGame(@Param() getGameDto: GetGameDto): Promise<GameResponse> {
    return this.testerService.getGame(getGameDto);
  }

  @ApiOperation({ summary: 'Получить регионы для tester' })
  @ApiQuery({ type: String, description: 'Slug игры', required: true, name: 'slug' })
  @ApiQuery({
    description: 'Тип доставки',
    example: GameDeliveryType.STEAM_GIFT,
    enum: GameDeliveryType,
    required: true,
    enumName: 'GameDeliveryType',
    name: 'deliveryType'
  })
  @ApiResponse({ type: GameRegionsResponse, status: 200 })
  @Get('/games/regions')
  async getGameRegions(
    @Query() getGameRegionsDto: GetGameRegionsDto
  ): Promise<GameRegionsResponse> {
    return this.testerService.getGameRegions(getGameRegionsDto);
  }

  @ApiOperation({ summary: 'Получить варианты цен для tester' })
  @ApiQuery({ type: String, description: 'Slug игры', required: true, name: 'slug' })
  @ApiQuery({
    description: 'Тип доставки',
    example: GameDeliveryType.STEAM_GIFT,
    enum: GameDeliveryType,
    required: true,
    enumName: 'GameDeliveryType',
    name: 'deliveryType'
  })
  @ApiQuery({
    description: 'Регион',
    example: GameRegion.RU,
    enum: GameRegion,
    required: true,
    enumName: 'GameRegion',
    name: 'region'
  })
  @ApiResponse({ type: GamePriceVariantsResponse, status: 200 })
  @Get('/games/price-variants')
  async getGamePriceVariants(
    @Query() getGamePriceVariantsDto: GetGamePriceVariantsDto
  ): Promise<GamePriceVariantsResponse> {
    return this.testerService.getGamePriceVariants(getGamePriceVariantsDto);
  }

  @ApiOperation({ summary: 'Создать заказ игры и транзакцию для оплаты для tester' })
  @ApiResponse({ type: CreateGameOrderResponse, status: 200 })
  @Post('/games/order')
  async createGameOrder(
    @Body() createGameOrderDto: CreateGameOrderDto
  ): Promise<CreateGameOrderResponse> {
    return this.testerService.createGameOrder(createGameOrderDto);
  }

  @ApiOperation({ summary: 'Получить все заказы игр для tester' })
  @ApiResponse({ type: GameOrdersResponse, status: 200 })
  @Get('/games/orders')
  @AuthorizedOnly()
  async getGameOrders(@CurrentUser() user: User): Promise<GameOrdersResponse> {
    return this.testerService.getGameOrders(user);
  }

  @ApiOperation({ summary: 'Получить оплаченный заказ игры для tester' })
  @ApiQuery({
    type: String,
    description: 'Одноразовый токен доступа',
    example: '1f2e3d4c5b6a7980abcdef1234567890abcdef1234567890abcdef1234567890',
    required: true,
    name: 'token'
  })
  @ApiResponse({ type: GameOrderResponse, status: 200 })
  @Get('/games/orders/paid')
  async getGamePaidOrder(
    @Query() getGamePaidOrderDto: GetGamePaidOrderDto
  ): Promise<GameOrderResponse> {
    return this.testerService.getGamePaidOrder(getGamePaidOrderDto);
  }

  @ApiOperation({ summary: 'Получить заказ игры для tester' })
  @ApiResponse({ type: GameOrderResponse, status: 200 })
  @Get('/games/orders/:orderId')
  @AuthorizedOnly()
  async getGameOrder(
    @Param() getGameOrderDto: GetGameOrderDto,
    @CurrentUser() user: User
  ): Promise<GameOrderResponse> {
    return this.testerService.getGameOrder(getGameOrderDto, user);
  }
}
