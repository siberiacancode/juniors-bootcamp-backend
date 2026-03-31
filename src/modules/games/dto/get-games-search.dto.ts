import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

import { transformSearchParam } from '@/utils/helpers';

import { GameGenre } from '../constants';

@ArgsType()
export class GetGamesSearchDto {
  @IsOptional()
  @Transform(transformSearchParam)
  @IsArray()
  @IsNumber({}, { each: true })
  @Min(1990, { each: true })
  @Max(2100, { each: true })
  @Field(() => [Number], { nullable: true })
  @ApiProperty({
    required: false,
    example: [2024, 2025],
    isArray: true,
    description: 'Фильтр по годам релиза'
  })
  year?: number[];

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
