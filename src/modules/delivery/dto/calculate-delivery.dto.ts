import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';

@InputType('CalculateDeliveryPointDto')
export class CalculateDeliveryPointDto {
  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  @ApiProperty({ example: 56.8389, description: 'Широта' })
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  @ApiProperty({ example: 60.6057, description: 'Долгота' })
  longitude: number;
}

@InputType('CalculateDeliveryPackageDto')
export class CalculateDeliveryPackageDto {
  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  @ApiProperty({ example: 10, description: 'Длина посылки' })
  length: number;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  @ApiProperty({ example: 10, description: 'Ширина посылки' })
  width: number;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  @ApiProperty({ example: 10, description: 'Длина посылки' })
  weight: number;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  @ApiProperty({ example: 10, description: 'Высота посылки' })
  height: number;
}

@ArgsType()
export class CalculateDeliveryDto {
  @ValidateNested()
  @Field(() => CalculateDeliveryPackageDto)
  @ApiProperty({ description: 'Поссылка', type: CalculateDeliveryPackageDto })
  @Type(() => CalculateDeliveryPackageDto)
  package: CalculateDeliveryPackageDto;

  @ValidateNested()
  @Field(() => CalculateDeliveryPointDto)
  @ApiProperty({ description: 'Город отправки', type: CalculateDeliveryPointDto })
  @Type(() => CalculateDeliveryPointDto)
  senderPoint: CalculateDeliveryPointDto;

  @ValidateNested()
  @Field(() => CalculateDeliveryPointDto)
  @ApiProperty({ description: 'Город получения', type: CalculateDeliveryPointDto })
  @Type(() => CalculateDeliveryPointDto)
  receiverPoint: CalculateDeliveryPointDto;
}
