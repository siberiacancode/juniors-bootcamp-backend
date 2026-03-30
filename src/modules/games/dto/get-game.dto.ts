import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

@ArgsType()
export class GetGameDto {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  @ApiProperty({ description: 'ID игры' })
  gameId: string;
}
