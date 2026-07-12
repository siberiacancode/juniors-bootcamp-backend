import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class BaseResponse {
  @ApiProperty({ description: 'Статус запроса' })
  @Field(() => Boolean)
  success: boolean;

  @ApiProperty({ description: 'Причина ошибки', required: false })
  @Field(() => String, { nullable: true })
  reason?: string;
}
