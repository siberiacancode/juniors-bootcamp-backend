import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { DeliveryType, Region } from '../constants';

@ArgsType()
export class GetPriceVariantsDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ description: 'Slug игры' })
  slug: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => DeliveryType)
  @ApiProperty({
    description: 'Тип доставки',
    enum: DeliveryType,
    example: DeliveryType.STEAM_GIFT,
    enumName: 'DeliveryType'
  })
  deliveryType: DeliveryType;

  @IsString()
  @IsNotEmpty()
  @Field(() => Region)
  @ApiProperty({ description: 'Регион', enum: Region, example: Region.RU, enumName: 'Region' })
  region: Region;
}
