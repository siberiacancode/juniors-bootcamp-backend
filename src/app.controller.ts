import { Controller, Get, Render } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { OTP_EXPIRED_TIME, OtpsService } from './modules/otps';

@ApiTags('📃 pages')
@Controller()
export class AppController {
  constructor(private readonly otpsService: OtpsService) {}

  @ApiOperation({ summary: 'страница с отп кодами' })
  @Get('/otps')
  @Render('otps.hbs')
  async otps() {
    const otps = await this.otpsService.findMany();

    return {
      otps: otps.map((otp) => ({
        phone: otp.phone,
        code: otp.code,
        expiredDate: new Date(new Date(otp.createdAt).getTime() + OTP_EXPIRED_TIME)
      }))
    };
  }
}
