import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

export enum FilmHallCellStatus {
  DEFAULT = 'default',
  PAID = 'paid'
}

registerEnumType(FilmHallCellStatus, {
  name: 'FilmHallCellStatus'
});

export enum FilmHallCellType {
  ECONOMY = 'economy',
  COMFORT = 'comfort',
  BLOCKED = 'blocked',
  PAID = 'paid'
}

registerEnumType(FilmHallCellType, {
  name: 'FilmHallCellType'
});

@InputType('FilmHallCellInput')
@ObjectType()
export class FilmHallCell {
  @Field(() => FilmHallCellType)
  @ApiProperty({
    example: FilmHallCellType.ECONOMY,
    description: 'Тип места в зале',
    enum: FilmHallCellType,
    enumName: 'FilmHallCellType'
  })
  type: FilmHallCellType;

  @ApiProperty()
  @Field(() => Number)
  @ApiProperty({ example: 100, description: 'Цена места в зале' })
  price: number;
}
