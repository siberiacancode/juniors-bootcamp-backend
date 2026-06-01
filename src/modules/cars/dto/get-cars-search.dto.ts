import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, Validate } from 'class-validator';

import { transformSearchParam } from '@/utils/helpers';

import { BodyType, Brand, Color, Steering, Transmission } from '../constants/enums';
import { TimestampValidator } from './create-rent.dto';

@ArgsType()
export class GetCarsSearchDto {
  @IsOptional()
  @IsNumber()
  @Validate(TimestampValidator)
  @Field(() => Number, {
    nullable: true,
    description: 'Дата начала аренды (timestamp в миллисекундах)'
  })
  startDate?: number;

  @IsOptional()
  @IsNumber()
  @Validate(TimestampValidator)
  @Field(() => Number, {
    nullable: true,
    description: 'Дата окончания аренды (timestamp в миллисекундах)'
  })
  endDate?: number;

  @IsOptional()
  @Transform(transformSearchParam)
  @IsArray()
  @IsString({ each: true })
  @Field(() => [Brand], { nullable: true })
  @ApiProperty({
    required: false,
    enum: Brand,
    example: [Brand.HYUNDAI, Brand.KIA],
    enumName: 'Brand',
    isArray: true,
    description: 'Фильтр по бренду автомобиля'
  })
  brand?: Brand[];

  @IsOptional()
  @Transform(transformSearchParam)
  @IsArray()
  @IsString({ each: true })
  @Field(() => [BodyType], { nullable: true })
  @ApiProperty({
    required: false,
    enum: BodyType,
    example: [BodyType.SEDAN, BodyType.SUV],
    enumName: 'BodyType',
    isArray: true,
    description: 'Фильтр по типу кузова'
  })
  bodyType?: BodyType[];

  @IsOptional()
  @Transform(transformSearchParam)
  @IsArray()
  @IsString({ each: true })
  @Field(() => [Color], { nullable: true })
  @ApiProperty({
    required: false,
    enum: Color,
    example: [Color.BLACK, Color.WHITE],
    enumName: 'Color',
    isArray: true,
    description: 'Фильтр по цвету автомобиля'
  })
  color?: Color[];

  @IsOptional()
  @Transform(transformSearchParam)
  @IsArray()
  @IsString({ each: true })
  @Field(() => [Steering], { nullable: true })
  @ApiProperty({
    required: false,
    enum: Steering,
    example: [Steering.LEFT, Steering.RIGHT],
    enumName: 'Steering',
    isArray: true,
    description: 'Фильтр по типу рулевого управления'
  })
  steering?: Steering[];

  @IsOptional()
  @Transform(transformSearchParam)
  @IsArray()
  @IsString({ each: true })
  @Field(() => [Transmission], { nullable: true })
  @ApiProperty({
    required: false,
    enum: Transmission,
    example: [Transmission.AUTOMATIC, Transmission.MANUAL],
    enumName: 'Transmission',
    isArray: true,
    description: 'Фильтр по типу коробки передач'
  })
  transmission?: Transmission[];

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value, 10))
  @IsNumber()
  @Field(() => Number, { nullable: true })
  minPrice?: number;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value, 10))
  @IsNumber()
  @Field(() => Number, { nullable: true })
  maxPrice?: number;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value, 10))
  @IsNumber()
  @Field(() => Number, { nullable: true })
  page?: number;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value, 10))
  @IsNumber()
  @Field(() => Number, { nullable: true })
  limit?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  search?: string;
}
