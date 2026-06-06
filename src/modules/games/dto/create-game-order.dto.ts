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

@InputType('CreateGameOrderPersonDto')
export class CreateGameOrderPersonDto {
  @IsPhoneNumber('RU')
  @Field(() => String)
  @ApiProperty({ example: '79990001122', description: 'Телефон пользователя' })
  phone!: string;

  @IsEmail()
  @IsOptional()
  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'example@mail.com', description: 'Email пользователя' })
  email!: string;
}

@ArgsType()
export class CreateGameOrderDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'battlefield-2042', description: 'Slug игры' })
  gameSlug!: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'bf2042-1', description: 'ID варианта цены' })
  priceVariantId!: string;

  @ValidateNested()
  @Type(() => CreateGameOrderPersonDto)
  @Field(() => CreateGameOrderPersonDto)
  @ApiProperty({ description: 'Данные покупателя', type: CreateGameOrderPersonDto })
  person!: CreateGameOrderPersonDto;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: '2202 2063 8908 5954', description: 'Дебетовая карта для оплаты' })
  debitCard!: string;
}
