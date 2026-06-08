import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested
} from 'class-validator';

import { DeliveryType, Region } from '../constants';

@InputType('CreateGameOrderPersonDto')
export class CreateGameOrderPersonDto {
  @IsPhoneNumber('RU')
  @Field(() => String)
  @ApiProperty({ example: '79990001122', description: 'Телефон пользователя' })
  phone: string;

  @IsEmail()
  @Field(() => String)
  @ApiProperty({ example: 'example@mail.com', description: 'Email пользователя' })
  email: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  @ApiProperty({
    required: false,
    example: 'https://s.team/p/',
    description: 'Ссылка на приглашение'
  })
  inviteLink?: string;
}

@ArgsType()
export class CreateGameOrderDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'battlefield-2042', description: 'Slug игры' })
  gameSlug: string;

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

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'Deluxe', description: 'Издание' })
  edition: string;

  @ValidateNested()
  @Type(() => CreateGameOrderPersonDto)
  @Field(() => CreateGameOrderPersonDto)
  @ApiProperty({ description: 'Данные покупателя', type: CreateGameOrderPersonDto })
  person: CreateGameOrderPersonDto;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: '2202 2063 8908 5954', description: 'Дебетовая карта для оплаты' })
  debitCard: string;
}
