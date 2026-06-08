import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

import { transformSearchParam } from '@/utils/helpers';

import { GameFilter, GameGenre, GameView } from '../constants';

@ArgsType()
export class GetGamesDto {
  @IsOptional()
  @Transform(transformSearchParam)
  @IsArray()
  @IsString({ each: true })
  @Field(() => [GameFilter], { nullable: true })
  @ApiProperty({
    required: false,
    enum: GameFilter,
    example: [GameFilter.DISCOUNT, GameFilter.DLC],
    enumName: 'GameFilter',
    isArray: true,
    description: 'Дополнительные фильтры'
  })
  filter?: GameFilter[];

  @IsOptional()
  @IsString()
  @Field(() => GameView, { nullable: true })
  @ApiProperty({
    required: false,
    enum: GameView,
    example: GameView.POPULAR,
    enumName: 'GameView',
    description: 'Предустановленный вид выборки'
  })
  view?: GameView;

  @IsOptional()
  @Transform(transformSearchParam)
  @IsArray()
  @IsString({ each: true })
  @Field(() => [GameGenre], { nullable: true })
  @ApiProperty({
    required: false,
    enum: GameGenre,
    example: [GameGenre.ACTION, GameGenre.RPG],
    enumName: 'GameGenre',
    isArray: true,
    description: 'Фильтр по жанрам'
  })
  genre?: GameGenre[];

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
