import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';

import { DeliveryOptionType } from '../entities';
import { Payer } from '../modules';

@InputType('CreateDeliveryOrderPersonDto')
export class CreateDeliveryOrderPersonDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'firstname', description: 'Имя' })
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'lastname', description: 'Фамилия' })
  lastname: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'middlename', description: 'Отчество', required: false })
  middlename?: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: '89990009999', description: 'Телефон' })
  phone: string;
}

@InputType('CreateDeliveryOrderSenderAddressDto')
export class CreateDeliveryOrderSenderAddressDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'street', description: 'Улица' })
  street: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'house', description: 'Номер дома' })
  house: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'apartment', description: 'Номер квартиры' })
  apartment: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'comment', description: 'Комментарий', required: false })
  comment?: string;
}

@InputType('CreateDeliveryOrderReceiverAddressDto')
export class CreateDeliveryOrderReceiverAddressDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'street', description: 'Улица' })
  street: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'house', description: 'Номер дома' })
  house: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'apartment', description: 'Номер квартиры' })
  apartment: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'comment', description: 'Комментарий', required: false })
  comment?: string;

  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  @ApiProperty({ description: 'Бесконтактная доставка', required: false })
  isNonContact?: boolean;
}

@ArgsType()
export class CreateDeliveryOrderDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ description: 'Идентификатор типа посылки' })
  packageId: string;

  @IsEnum(DeliveryOptionType)
  @IsNotEmpty()
  @Field(() => DeliveryOptionType)
  @ApiProperty({ description: 'Тип заказа', enum: DeliveryOptionType })
  optionType: DeliveryOptionType;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ description: 'Идентификатор города отправки' })
  senderPointId: string;

  @ValidateNested()
  @Field(() => CreateDeliveryOrderSenderAddressDto)
  @ApiProperty({ description: 'Адрес отправителя', type: CreateDeliveryOrderSenderAddressDto })
  @Type(() => CreateDeliveryOrderSenderAddressDto)
  senderAddress: CreateDeliveryOrderSenderAddressDto;

  @ValidateNested()
  @Field(() => CreateDeliveryOrderPersonDto)
  @ApiProperty({ description: 'Отправитель', type: CreateDeliveryOrderPersonDto })
  @Type(() => CreateDeliveryOrderPersonDto)
  sender: CreateDeliveryOrderPersonDto;

  @IsString()
  @Field(() => String)
  @ApiProperty({ description: 'Идентификатор города получения' })
  receiverPointId: string;

  @ValidateNested()
  @Field(() => CreateDeliveryOrderReceiverAddressDto)
  @ApiProperty({ description: 'Адрес получателя', type: CreateDeliveryOrderReceiverAddressDto })
  @Type(() => CreateDeliveryOrderReceiverAddressDto)
  receiverAddress: CreateDeliveryOrderReceiverAddressDto;

  @ValidateNested()
  @Field(() => CreateDeliveryOrderPersonDto)
  @ApiProperty({ description: 'Получатель', type: CreateDeliveryOrderPersonDto })
  @Type(() => CreateDeliveryOrderPersonDto)
  receiver: CreateDeliveryOrderPersonDto;

  @IsEnum(Payer)
  @Field(() => Payer)
  @ApiProperty({ description: 'Кто будет оплачивать', enum: Payer })
  payer: Payer;
}
