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
import { ApiAuthorizedOnly } from '@/utils/guards';
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

  @Post('/auth/otp')
  @ApiOperation({ summary: 'Создание otp кода для tester' })
  @ApiResponse({
    status: 200,
    description: 'create otp',
    type: OtpResponse
  })
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

  @Post('/users/signin')
  @ApiOperation({ summary: 'Авторизация для tester' })
  @ApiResponse({
    status: 200,
    description: 'signin',
    type: SignInResponse
  })
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

  @ApiAuthorizedOnly()
  @Patch('/users/profile')
  @ApiOperation({ summary: 'Обновить профиль пользователя для tester' })
  @ApiResponse({
    status: 200,
    description: 'update profile',
    type: UpdateProfileResponse
  })
  @ApiHeader({
    name: 'authorization'
  })
  @ApiBearerAuth()
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

  @ApiAuthorizedOnly()
  @Get('/users/session')
  @ApiOperation({ summary: 'Получить сессию пользователя для tester' })
  @ApiResponse({
    status: 200,
    description: 'session',
    type: SessionResponse
  })
  @ApiHeader({
    name: 'authorization'
  })
  @ApiBearerAuth()
  async session(@Req() request: Request): Promise<SessionResponse> {
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

  @Get('/games/info')
  @ApiOperation({ summary: 'Получить игры для tester' })
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

  @Get('/games/search')
  @ApiOperation({ summary: 'Поиск по играм для tester' })
  @ApiResponse({ status: 200, type: GameSearchResponse })
  @ApiQuery({ name: 'search', required: true, type: String, description: 'Строка поиска' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Лимит' })
  searchGames(@Query() searchGamesDto: SearchGamesDto): GameSearchResponse {
    const games = this.gamesService.searchAutocomplete(searchGamesDto);
    return this.wrapSuccess({ games });
  }

  @Get('/games/info/:slug')
  @ApiOperation({ summary: 'Получить игру для tester' })
  @ApiResponse({ status: 200, type: GameResponse })
  getGame(@Param() getGameDto: GetGameDto): GameResponse {
    const game = this.gamesService.getGame(getGameDto.slug);

    if (!game) {
      throw new NotFoundException(this.wrapFail('Игра не найдена'));
    }

    return this.wrapSuccess({ game });
  }

  @Get('/games/regions')
  @ApiOperation({ summary: 'Получить регионы для tester' })
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

  @Get('/games/price-variants')
  @ApiOperation({ summary: 'Получить варианты цен для tester' })
  @ApiResponse({ status: 200, type: PriceVariantsResponse })
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
  getPriceVariants(@Query() getPriceVariantsDto: GetPriceVariantsDto): PriceVariantsResponse {
    const priceVariants = this.gamesService.getPriceVariant(getPriceVariantsDto);

    if (!priceVariants) {
      throw new NotFoundException(this.wrapFail('Варианты не найдены'));
    }

    return this.wrapSuccess({ priceVariants });
  }

  @Post('/games/order')
  @ApiOperation({ summary: 'Купить игру и получить ключ для tester' })
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
  @Get('/games/orders')
  @ApiOperation({ summary: 'Получить все заказы игр для tester' })
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
  @Get('/games/orders/:orderId')
  @ApiOperation({ summary: 'Получить заказ игры для tester' })
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
