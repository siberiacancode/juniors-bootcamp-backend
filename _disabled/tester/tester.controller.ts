import type { FastifyRequest } from 'fastify';

import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Req
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import type { User } from '@/modules/users';

import { OtpsService, RETRY_DELAY } from '@/modules/otps';
import { CreateOtpDto } from '@/modules/otps/dto';
import { OtpResponse } from '@/modules/otps/otps.model';
import { SignInDto, UpdateProfileDto } from '@/modules/users/dto';
import {
  SessionResponse,
  SignInResponse,
  UpdateProfileResponse
} from '@/modules/users/users.model';
import { UsersService } from '@/modules/users/users.service';
import { AuthorizedOnlyGuard } from '@/modules/auth';
import { AuthService, BaseResolver } from '@/utils/services';

import { DeliveryType, GameFilter, GameGenre, GameView, Region } from '../games/constants';
import {
  CreateGameOrderDto,
  GetGameDto,
  GetGameOrderDto,
  GetGamesDto,
  GetPriceVariantsDto,
  GetRegionsDto,
  SearchGamesDto
} from '../games/dto';
import {
  CreateGameOrderResponse,
  GameOrderResponse,
  GameOrdersResponse,
  GameResponse,
  GameSearchResponse,
  GamesPaginatedResponse,
  PriceVariantsResponse,
  RegionsResponse
} from '../games/games.model';
import { GamesService } from '../games/games.service';
import { GameOrderService } from '../games/modules';

@ApiTags('🧪 tester')
@Controller('/tester')
export class TesterController extends BaseResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly otpsService: OtpsService,
    private readonly authService: AuthService,
    private readonly gamesService: GamesService,
    private readonly gameOrderService: GameOrderService
  ) {
    super();
  }

  @ApiOperation({ summary: 'Создание otp кода для tester' })
  @ApiResponse({
    type: OtpResponse,
    description: 'create otp',
    status: 200
  })
  @Post('/auth/otp')
  async createOtp(@Body() createOtpDto: CreateOtpDto): Promise<OtpResponse> {
    const existingOtp = await this.otpsService.findOne({ phone: createOtpDto.phone });

    if (existingOtp) {
      const { retryDelay, created } = existingOtp;
      const now = Date.now();

      if (new Date(created).getTime() + retryDelay > now) {
        return this.wrapSuccess({ retryDelay: RETRY_DELAY - (now - new Date(created).getTime()) });
      }

      await this.otpsService.delete({ phone: createOtpDto.phone });
    }

    const code = Math.floor(100000 + Math.random() * 900000);
    const retryDelay = Math.random() > 0.5 ? RETRY_DELAY * 10 : RETRY_DELAY;

    await this.otpsService.create({
      phone: createOtpDto.phone,
      code,
      retryDelay
    });

    return this.wrapSuccess({ retryDelay });
  }

  @ApiOperation({ summary: 'Авторизация для tester' })
  @ApiResponse({
    type: SignInResponse,
    description: 'signin',
    status: 200
  })
  @Post('/users/signin')
  async signin(@Body() signInDto: SignInDto): Promise<SignInResponse> {
    let user = await this.usersService.findOne({ phone: signInDto.phone });

    if (!user) {
      user = await this.usersService.create({ phone: signInDto.phone });
    }

    const otp = await this.otpsService.findOne({ phone: signInDto.phone, code: signInDto.code });

    if (!otp) {
      throw new BadRequestException(this.wrapFail('Неправильный otp код'));
    }

    await this.otpsService.delete({ _id: otp._id });
    const { token } = await this.authService.login(user);

    return this.wrapSuccess({ user, token });
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Обновить профиль пользователя для tester' })
  @ApiResponse({
    type: UpdateProfileResponse,
    description: 'update profile',
    status: 200
  })
  @Patch('/users/profile')
  @AuthorizedOnly()
  async updateProfile(@Body() updateProfileDto: UpdateProfileDto): Promise<UpdateProfileResponse> {
    if (Math.random() < 0.3) {
      throw new BadRequestException(this.wrapFail('Произошла ошибка'));
    }

    const user = await this.usersService.findOne({ phone: updateProfileDto.phone });

    if (!user) {
      throw new BadRequestException(this.wrapFail('Пользователь не существует'));
    }

    await this.usersService.findOneAndUpdate(
      { phone: user.phone },
      {
        $set: {
          firstname: updateProfileDto.profile.firstname,
          lastname: updateProfileDto.profile.lastname,
          middlename: updateProfileDto.profile.middlename,
          email: updateProfileDto.profile.email,
          city: updateProfileDto.profile.city
        }
      }
    );

    const returnedUser = await this.usersService.findOne({ phone: user.phone });

    return this.wrapSuccess({ user: returnedUser });
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Получить сессию пользователя для tester' })
  @ApiResponse({
    type: SessionResponse,
    description: 'session',
    status: 200
  })
  @Get('/users/session')
  @AuthorizedOnly()
  async session(@Req() request: FastifyRequest): Promise<SessionResponse> {
    const token = request.headers.authorization.split(' ')[1];
    const decodedJwtAccessToken = (await this.authService.decode(token)) as User;

    const user = await this.usersService.findOne({
      phone: decodedJwtAccessToken.phone
    });

    if (!user) {
      throw new BadRequestException(this.wrapFail('Пользователь не найден'));
    }

    return this.wrapSuccess({ user });
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
  getGames(@Query() getGamesSearchDto: GetGamesDto): GamesPaginatedResponse {
    const games = this.gamesService.getFilteredGames(getGamesSearchDto);

    const paginatedGames = this.gamesService.getPagination({
      items: games,
      page: getGamesSearchDto.page,
      limit: getGamesSearchDto.limit
    });

    return this.wrapSuccess(paginatedGames);
  }

  @ApiOperation({ summary: 'Поиск по играм для tester' })
  @ApiQuery({ type: String, description: 'Строка поиска', required: true, name: 'search' })
  @ApiQuery({ type: Number, description: 'Лимит', required: false, name: 'limit' })
  @ApiResponse({ type: GameSearchResponse, status: 200 })
  @Get('/games/search')
  searchGames(@Query() searchGamesDto: SearchGamesDto): GameSearchResponse {
    const games = this.gamesService.searchAutocomplete(searchGamesDto);
    return this.wrapSuccess({ games });
  }

  @ApiOperation({ summary: 'Получить игру для tester' })
  @ApiResponse({ type: GameResponse, status: 200 })
  @Get('/games/info/:slug')
  getGame(@Param() getGameDto: GetGameDto): GameResponse {
    const game = this.gamesService.getGame(getGameDto.slug);

    if (!game) {
      throw new NotFoundException(this.wrapFail('Игра не найдена'));
    }

    return this.wrapSuccess({ game });
  }

  @ApiOperation({ summary: 'Получить регионы для tester' })
  @ApiQuery({
    type: String,
    description: 'Slug игры',
    required: true,
    name: 'slug'
  })
  @ApiQuery({
    description: 'Тип доставки',
    example: DeliveryType.STEAM_GIFT,
    enum: DeliveryType,
    required: true,
    enumName: 'DeliveryType',
    name: 'deliveryType'
  })
  @ApiResponse({ type: RegionsResponse, status: 200 })
  @Get('/games/regions')
  getRegions(@Query() getRegionsDto: GetRegionsDto): RegionsResponse {
    const regions = this.gamesService.getRegions(getRegionsDto);

    if (!regions) {
      throw new NotFoundException(this.wrapFail('Регионы не найдены'));
    }

    return this.wrapSuccess({ regions });
  }

  @ApiOperation({ summary: 'Получить варианты цен для tester' })
  @ApiQuery({
    type: String,
    description: 'Slug игры',
    required: true,
    name: 'slug'
  })
  @ApiQuery({
    description: 'Тип доставки',
    example: DeliveryType.STEAM_GIFT,
    enum: DeliveryType,
    required: true,
    enumName: 'DeliveryType',
    name: 'deliveryType'
  })
  @ApiQuery({
    description: 'Регион',
    example: Region.RU,
    enum: Region,
    required: true,
    enumName: 'Region',
    name: 'region'
  })
  @ApiResponse({ type: PriceVariantsResponse, status: 200 })
  @Get('/games/price-variants')
  getPriceVariants(@Query() getPriceVariantsDto: GetPriceVariantsDto): PriceVariantsResponse {
    const priceVariants = this.gamesService.getPriceVariant(getPriceVariantsDto);

    if (!priceVariants) {
      throw new NotFoundException(this.wrapFail('Варианты не найдены'));
    }

    return this.wrapSuccess({ priceVariants });
  }

  @ApiOperation({ summary: 'Купить игру и получить ключ для tester' })
  @ApiResponse({ type: CreateGameOrderResponse, status: 200 })
  @Post('/games/order')
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

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Получить все заказы игр для tester' })
  @ApiResponse({ type: GameOrdersResponse, status: 200 })
  @Get('/games/orders')
  @AuthorizedOnly()
  async getGameOrders(@Req() request: FastifyRequest): Promise<GameOrdersResponse> {
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

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Получить заказ игры для tester' })
  @ApiResponse({ type: GameOrderResponse, status: 200 })
  @Get('/games/orders/:orderId')
  @AuthorizedOnly()
  async getGameOrder(
    @Param() getGameOrderDto: GetGameOrderDto,
    @Req() request: FastifyRequest
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
