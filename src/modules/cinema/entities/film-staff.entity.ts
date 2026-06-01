import { Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

export enum Profession {
  ACTOR = 'actor',
  DIRECTOR = 'director'
}

registerEnumType(Profession, {
  name: 'Profession'
});

@InputType('FilmStaffInput')
@ObjectType()
export class FilmStaff {
  @Field(() => String)
  @ApiProperty({ example: '1', description: 'Идентификатор персоны' })
  id: string;

  @Field(() => [Profession])
  @ApiProperty({
    description: 'Список профессий',
    enum: Profession,
    example: [Profession.ACTOR, Profession.DIRECTOR],
    enumName: 'Profession',
    isArray: true
  })
  professions: Profession[];

  @Field(() => String)
  @ApiProperty({ description: 'Полное имя персоны' })
  fullName: string;

  @Field(() => String)
  @ApiProperty({ description: 'Фото персоны' })
  photo: string;
}
