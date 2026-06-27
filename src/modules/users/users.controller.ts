import type { FastifyRequest } from 'fastify';

import { BadRequestException, Body, Controller, Get, Patch, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { OtpsService } from '@/modules/otps';
import { ApiAuthorizedOnly } from '@/utils/guards';
import { AuthService, BaseResolver } from '@/utils/services';

import type { User } from './entities';

import { SignInDto, UpdateProfileDto } from './dto';
import { SessionResponse, SignInResponse, UpdateProfileResponse } from './users.model';
import { UsersService } from './users.service';

@ApiTags('💂‍♂️ users')
@Controller('users')
export class UsersController extends BaseResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly otpsService: OtpsService,
    private readonly authService: AuthService
  ) {
    super();
  }

  @Post('/signin')
  @ApiOperation({ summary: 'Авторизация' })
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
      throw new BadRequestException(this.wrapFail('Неправильный отп код'));
    }

    await this.otpsService.delete({ _id: otp._id });
    const { token } = await this.authService.login(user);

    return this.wrapSuccess({ user, token });
  }

  @ApiAuthorizedOnly()
  @Patch('/profile')
  @ApiOperation({ summary: 'Обновить профиль пользователя' })
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
  @Get('/session')
  @ApiOperation({ summary: 'Получить сессию пользователя' })
  @ApiResponse({
    status: 200,
    description: 'session',
    type: SessionResponse
  })
  @ApiHeader({
    name: 'authorization'
  })
  @ApiBearerAuth()
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
}
