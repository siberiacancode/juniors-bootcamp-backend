import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class SearchGamesDto {
  @IsString()
  @Field(() => String)
  @ApiProperty({ description: 'Строка поиска для автокомплита' })
  search: string;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value, 10))
  @IsNumber()
  @Field(() => Number, { nullable: true })
  @ApiProperty({ required: false, example: 8, description: 'Лимит результатов' })
  limit?: number;
}
