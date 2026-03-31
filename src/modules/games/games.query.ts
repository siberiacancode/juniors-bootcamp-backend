import type { Request } from 'express';

import { BadRequestException } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';

import type { User } from '@/modules/users';

import { GqlAuthorizedOnly } from '@/utils/guards';
import { AuthService, BaseResolver } from '@/utils/services';

import { GetGameDto, GetGameOrderDto, GetGamesSearchDto, SearchGamesDto } from './dto';
import {
  GameOrderResponse,
  GameOrdersResponse,
  GameResponse,
  GameSearchResponse,
  GamesPaginatedResponse
} from './games.model';
import { GamesService } from './games.service';
import { GameOrderService } from './modules';

@Resolver('🎮 games query')
@Resolver()
export class GamesQuery extends BaseResolver {
  constructor(
    private readonly gamesService: GamesService,
    private readonly gameOrderService: GameOrderService,
    private readonly authService: AuthService
  ) {
    super();
  }

  @Query(() => GamesPaginatedResponse)
  getGames(@Args() getGamesSearchDto: GetGamesSearchDto): GamesPaginatedResponse {
    const games = this.gamesService.getFilteredGames(getGamesSearchDto);
    const paginatedGames = this.gamesService.getPagination({
      items: games,
      page: getGamesSearchDto.page,
      limit: getGamesSearchDto.limit
    });

    return this.wrapSuccess(paginatedGames);
  }

  @Query(() => GameResponse)
  getGame(@Args() getGameDto: GetGameDto): GameResponse {
    const game = this.gamesService.getGame(getGameDto.gameId);

    if (!game) {
      throw new BadRequestException(this.wrapFail('Игра не найдена'));
    }

    return this.wrapSuccess({ data: game });
  }

  @Query(() => GameSearchResponse)
  searchGames(@Args() searchGamesDto: SearchGamesDto): GameSearchResponse {
    const data = this.gamesService.searchAutocomplete(searchGamesDto);
    return this.wrapSuccess({ data });
  }

  @GqlAuthorizedOnly()
  @Query(() => GameOrdersResponse)
  async getGameOrders(@Context() context: { req: Request }): Promise<GameOrdersResponse> {
    const token = context.req.headers.authorization.split(' ')[1];
    const decodedJwtAccessToken = (await this.authService.decode(token)) as User;

    if (!decodedJwtAccessToken) {
      throw new BadRequestException(this.wrapFail('Некорректный токен авторизации'));
    }

    const orders = await this.gameOrderService.find({
      $or: [{ 'person.phone': decodedJwtAccessToken.phone }]
    });

    return this.wrapSuccess({ orders });
  }

  @GqlAuthorizedOnly()
  @Query(() => GameOrderResponse)
  async getGameOrder(
    @Args() getGameOrderDto: GetGameOrderDto,
    @Context() context: { req: Request }
  ): Promise<GameOrderResponse> {
    const token = context.req.headers.authorization.split(' ')[1];
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
}
