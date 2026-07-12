import { Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseResponse {
  @ApiProperty({ description: 'Статус запроса' })
  @Field(() => Boolean)
  success: boolean;

  @ApiProperty({ description: 'Причина ошибки', required: false })
  @Field(() => String, { nullable: true })
  reason?: string;
}
