import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

@InputType('CardInput')
@ObjectType()
export class Card {
  @ApiProperty({ type: String, description: 'ID карты' })
  @Field(() => String)
  _id: Types.ObjectId;

  @ApiProperty({ description: 'Телефон владельца карты', example: '89990009999' })
  @Field(() => String)
  phone: string;

  @ApiProperty({ description: 'Замаскированный номер карты', example: '**** 1234' })
  @Field(() => String)
  panMasked: string;

  @ApiProperty({ description: 'Токен карты', example: 'pan_token_value' })
  @Field(() => String)
  panToken: string;

  @ApiProperty({ description: 'Срок действия карты', example: '12/28' })
  @Field(() => String)
  expiry: string;

  @ApiProperty({ description: 'Держатель карты', example: 'IVAN IVANOV' })
  @Field(() => String)
  holder: string;
}
