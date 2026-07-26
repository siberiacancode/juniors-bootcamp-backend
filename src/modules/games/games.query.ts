import { Args, Query, Resolver } from '@nestjs/graphql';

import type { User } from '@/modules/users';

import { CurrentUser } from '@/utils/decorators';
import { AuthorizedOnly } from '@/utils/guards';

import {
  GetGameDto,
  GetGameOrderDto,
  GetGamePriceVariantsDto,
  GetGameRegionsDto,
  GetGamesSearchDto,
  SearchGamesDto
} from './dto';
import {
  GameOrderResponse,
  GameOrdersResponse,
  GamePriceVariantsResponse,
  GameRegionsResponse,
  GameResponse,
  GameSearchResponse,
  GamesPaginatedResponse
} from './games.model';
import { GamesService } from './games.service';

@Resolver('🎮 games query')
export class GamesQuery {
  constructor(private readonly gamesService: GamesService) {}

  @Query(() => GamesPaginatedResponse)
  async getGames(
    @Args() getGamesSearchDto: GetGamesSearchDto
  ): Promise<GamesPaginatedResponse> {
    return this.gamesService.getGames(getGamesSearchDto);
  }

  @Query(() => GameSearchResponse)
  async searchGames(@Args() searchGamesDto: SearchGamesDto): Promise<GameSearchResponse> {
    return this.gamesService.searchGames(searchGamesDto);
  }

  @Query(() => GameResponse)
  async getGame(@Args() getGameDto: GetGameDto): Promise<GameResponse> {
    return this.gamesService.getGame(getGameDto);
  }

  @Query(() => GameRegionsResponse)
  async getGameRegions(
    @Args() getGameRegionsDto: GetGameRegionsDto
  ): Promise<GameRegionsResponse> {
    return this.gamesService.getGameRegions(getGameRegionsDto);
  }

  @Query(() => GamePriceVariantsResponse)
  async getGamePriceVariants(
    @Args() getGamePriceVariantsDto: GetGamePriceVariantsDto
  ): Promise<GamePriceVariantsResponse> {
    return this.gamesService.getGamePriceVariants(getGamePriceVariantsDto);
  }

  @Query(() => GameOrdersResponse)
  @AuthorizedOnly()
  async getGameOrders(@CurrentUser() user: User): Promise<GameOrdersResponse> {
    return this.gamesService.getGameOrders(user.phone);
  }

  @Query(() => GameOrderResponse)
  @AuthorizedOnly()
  async getGameOrder(
    @Args() getGameOrderDto: GetGameOrderDto,
    @CurrentUser() user: User
  ): Promise<GameOrderResponse> {
    return this.gamesService.getGameOrder(getGameOrderDto.orderId, user.phone);
  }
}
