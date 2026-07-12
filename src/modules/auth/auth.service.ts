import { BadRequestException, Injectable } from '@nestjs/common';

import { Result } from '@/utils/helpers';

import { OtpsService } from '../otps';
import { ClientType, SessionsService } from '../sessions';
import { UsersService } from '../users';
import { SignInDto } from './dto';
import { SignInResponse } from './responses';

@Injectable()
export class AuthService {
  constructor(
    private readonly sessionsService: SessionsService,
    private readonly otpsService: OtpsService,
    private readonly usersService: UsersService
  ) {}

  async signIn(signInDto: SignInDto, clientType: ClientType): Promise<SignInResponse> {
    let user = await this.usersService.findByPhone(signInDto.phone);

    if (!user) {
      user = await this.usersService.create({ phone: signInDto.phone });
    }

    const otp = await this.otpsService.findOne({ phone: signInDto.phone, code: signInDto.code });

    if (!otp) {
      throw new BadRequestException(Result.fail('Неправильный отп код'));
    }

    await this.otpsService.deleteOne({ _id: otp._id });

    const session = await this.sessionsService.create({
      userId: user._id,
      clientType,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
    });

    const sessionToken = session._id.toString();

    return Result.success({
      user,
      ...(clientType === ClientType.MOBILE && { token: sessionToken })
    });
  }
}
