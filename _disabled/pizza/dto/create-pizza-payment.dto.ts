import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

import { OrderedPizza } from '../entities';

@InputType('CreatePizzaPaymentPersonDto')
export class CreatePizzaPaymentPersonDto {
  @ApiProperty({ description: 'Имя', example: 'firstname' })
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty({ description: 'Фамилия', example: 'lastname' })
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty({ description: 'Отчество', example: 'middlename', required: false })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  middlename?: string;

  @ApiProperty({ description: 'Телефон', example: '89990009999' })
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  phone: string;
}

@InputType('CreatePizzaPaymentAddressDto')
export class CreatePizzaPaymentAddressDto {
  @ApiProperty({ description: 'Улица', example: 'street' })
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({ description: 'Номер дома', example: 'house' })
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  house: string;

  @ApiProperty({ description: 'Номер квартиры', example: 'apartment' })
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  apartment: string;

  @ApiProperty({ description: 'Комментарий', example: 'comment', required: false })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  comment?: string;
}

@InputType('CreatePizzaPaymentDebitCardDto')
export class CreatePizzaPaymentDebitCardDto {
  @ApiProperty({ description: 'Номер карты', example: '1111 1111' })
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  pan: string;

  @ApiProperty({ description: 'Срок действие карты', example: '11/11' })
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  expireDate: string;

  @ApiProperty({ description: 'Код карты', example: '111' })
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  cvv: string;
}

@ArgsType()
export class CreatePizzaPaymentDto {
  @ApiProperty({ type: CreatePizzaPaymentAddressDto, description: 'Адрес доставки' })
  @Field(() => CreatePizzaPaymentAddressDto)
  @Type(() => CreatePizzaPaymentAddressDto)
  @ValidateNested()
  receiverAddress: CreatePizzaPaymentAddressDto;

  @ApiProperty({ type: CreatePizzaPaymentPersonDto, description: 'Данные пользователя' })
  @Field(() => CreatePizzaPaymentPersonDto)
  @Type(() => CreatePizzaPaymentPersonDto)
  @ValidateNested()
  person: CreatePizzaPaymentPersonDto;

  @ApiProperty({ type: CreatePizzaPaymentDebitCardDto, description: 'Банковская карта' })
  @Field(() => CreatePizzaPaymentDebitCardDto)
  @Type(() => CreatePizzaPaymentDebitCardDto)
  @ValidateNested()
  debitCard: CreatePizzaPaymentDebitCardDto;

  @ApiProperty({ type: [OrderedPizza], description: 'Пиццы' })
  @Field(() => [OrderedPizza])
  @Type(() => OrderedPizza)
  @ValidateNested()
  pizzas: OrderedPizza[];
}
