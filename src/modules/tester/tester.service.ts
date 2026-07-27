import type { FastifyReply } from 'fastify';

import { BadRequestException, Injectable } from '@nestjs/common';

import type { User } from '@/modules/users';

import { AuthService } from '@/modules/auth';
import { SignInDto } from '@/modules/auth/dto';
import { SignInResponse } from '@/modules/auth/responses';
import {
  CreateGameOrderDto,
  GetGameDto,
  GetGameOrderDto,
  GetGamePaidOrderDto,
  GetGamePriceVariantsDto,
  GetGameRegionsDto,
  GetGamesSearchDto,
  SearchGamesDto
} from '@/modules/games/dto';
import {
  CreateGameOrderResponse,
  GameOrderResponse,
  GameOrdersResponse,
  GamePriceVariantsResponse,
  GameRegionsResponse,
  GameResponse,
  GameSearchResponse,
  GamesPaginatedResponse
} from '@/modules/games/games.model';
import { GamesService } from '@/modules/games/games.service';
import { OtpsService } from '@/modules/otps';
import { CreateOtpDto } from '@/modules/otps/dto';
import { CreateOtpResponse } from '@/modules/otps/responses';
import { ClientType } from '@/modules/sessions';
import { UpdateProfileDto } from '@/modules/users/dto';
import { GetProfileResponse, UpdateProfileResponse } from '@/modules/users/responses';
import { UsersService } from '@/modules/users/users.service';
import { Result } from '@/utils/helpers';

@Injectable()
export class TesterService {
  constructor(
    private readonly authService: AuthService,
    private readonly gamesService: GamesService,
    private readonly otpsService: OtpsService,
    private readonly usersService: UsersService
  ) {}

  createOtp(createOtpDto: CreateOtpDto): Promise<CreateOtpResponse> {
    return this.otpsService.createOtp(createOtpDto);
  }

  async signIn(signInDto: SignInDto, reply: FastifyReply): Promise<SignInResponse> {
    return this.authService.signIn(signInDto, reply, ClientType.MOBILE);
  }

  async updateProfile(
    user: User,
    updateProfileDto: UpdateProfileDto
  ): Promise<UpdateProfileResponse> {
    if (Math.random() < 0.3) {
      throw new BadRequestException(Result.fail('Произошла ошибка'));
    }

    return this.usersService.updateProfile(user._id, updateProfileDto);
  }

  getSession(user: User): GetProfileResponse {
    return Result.success({ user });
  }

  getGames(getGamesSearchDto: GetGamesSearchDto): Promise<GamesPaginatedResponse> {
    return this.gamesService.getGames(getGamesSearchDto);
  }

  searchGames(searchGamesDto: SearchGamesDto): Promise<GameSearchResponse> {
    return this.gamesService.searchGames(searchGamesDto);
  }

  getGame(getGameDto: GetGameDto): Promise<GameResponse> {
    return this.gamesService.getGame(getGameDto);
  }

  getGameRegions(getGameRegionsDto: GetGameRegionsDto): Promise<GameRegionsResponse> {
    return this.gamesService.getGameRegions(getGameRegionsDto);
  }

  getGamePriceVariants(
    getGamePriceVariantsDto: GetGamePriceVariantsDto
  ): Promise<GamePriceVariantsResponse> {
    return this.gamesService.getGamePriceVariants(getGamePriceVariantsDto);
  }

  createGameOrder(createGameOrderDto: CreateGameOrderDto): Promise<CreateGameOrderResponse> {
    return this.gamesService.createGameOrder(createGameOrderDto);
  }

  getGameOrders(user: User): Promise<GameOrdersResponse> {
    return this.gamesService.getGameOrders(user.phone);
  }

  getGameOrder(getGameOrderDto: GetGameOrderDto, user: User): Promise<GameOrderResponse> {
    return this.gamesService.getGameOrder(getGameOrderDto.orderId, user.phone);
  }

  getGamePaidOrder(getGamePaidOrderDto: GetGamePaidOrderDto): Promise<GameOrderResponse> {
    return this.gamesService.getGamePaidOrder(getGamePaidOrderDto);
  }
}
