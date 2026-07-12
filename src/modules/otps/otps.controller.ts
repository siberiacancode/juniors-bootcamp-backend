import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { OtpsService } from '../otps';
import { CreateOtpDto } from './dto';
import { CreateOtpResponse } from './responses';

@ApiTags('🔑 otps')
@Controller('otps')
export class OtpsController {
  constructor(private readonly otpsService: OtpsService) {}

  @ApiOperation({ summary: 'Создание отп кода' })
  @ApiResponse({
    type: CreateOtpResponse,
    description: 'create otp',
    status: 200
  })
  @Post('/otp')
  async createOtp(@Body() createOtpDto: CreateOtpDto): Promise<CreateOtpResponse> {
    return this.otpsService.createOtp(createOtpDto);
  }
}
