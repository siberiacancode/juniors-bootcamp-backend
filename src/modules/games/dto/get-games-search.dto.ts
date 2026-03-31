import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

import { transformSearchParam } from '@/utils/helpers';

import { GameGenre } from '../constants';

@ArgsType()
export class GetGamesSearchDto {
  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value, 10))
  @IsNumber()
  @Min(1990)
  @Max(2100)
  @Field(() => Number, { nullable: true })
  @ApiProperty({ required: false, example: 2025, description: 'Фильтр по году релиза' })
  year?: number;

  @IsOptional()
  @Transform(transformSearchParam)
  @IsArray()
  @IsString({ each: true })
  @Field(() => [GameGenre], { nullable: true })
  @ApiProperty({ required: false, enum: GameGenre, isArray: true, description: 'Фильтр по жанрам' })
  genre?: GameGenre[];

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, description: 'Поиск по названию и описанию' })
  search?: string;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value, 10))
  @IsNumber()
  @Field(() => Number, { nullable: true })
  @ApiProperty({ required: false, example: 1, description: 'Страница' })
  page?: number;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value, 10))
  @IsNumber()
  @Field(() => Number, { nullable: true })
  @ApiProperty({ required: false, example: 10, description: 'Лимит' })
  limit?: number;
}
