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
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ example: 'Иванов', description: 'Фамилия пользователя' })
  lastName: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'Иванович', description: 'Отчество пользователя' })
  middleName?: string;

  @IsPhoneNumber('RU')
  @Field(() => String)
  @ApiProperty({ example: '79990001122', description: 'Телефон пользователя' })
  phone: string;

  @IsEmail()
  @IsOptional()
  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'example@mail.com', description: 'Email пользователя' })
  email?: string;
}

@ArgsType()
export class CreateGameOrderDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ description: 'ID игры для покупки' })
  gameId: string;

  @ValidateNested()
  @Type(() => CreateGameOrderPersonDto)
  @Field(() => CreateGameOrderPersonDto)
  @ApiProperty({ description: 'Данные покупателя', type: CreateGameOrderPersonDto })
  person: CreateGameOrderPersonDto;
}
