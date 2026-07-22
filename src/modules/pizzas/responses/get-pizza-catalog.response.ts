import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { BaseResponse } from '@/utils/base';

import { Pizza } from '../entities';

@ObjectType()
export class GetPizzaCatalogResponse extends BaseResponse {
  @ApiProperty({ type: [Pizza], description: 'Каталог пицц' })
  @Field(() => [Pizza])
  catalog: Pizza[];
}
