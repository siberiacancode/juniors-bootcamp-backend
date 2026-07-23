import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { Option } from '../pizzas.enums';

@InputType('PizzaOptionInput')
@ObjectType()
export class PizzaOption {
  @ApiProperty({
    description: 'Идентификатор опции',
    example: Option.CRUST_THIN,
    enum: Option,
    enumName: 'Option'
  })
  @Field(() => Option)
  type: Option;

  @ApiProperty({ description: 'Цена опции' })
  @Field(() => Number)
  price: number;
}
