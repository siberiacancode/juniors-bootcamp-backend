import { ArgsType, Field } from '@nestjs/graphql';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';

import { Category } from '../pizzas.enums';

@ArgsType()
export class GetPizzaCatalogDto {
  @ApiPropertyOptional({
    description: 'Фильтр по категории. Если не передан — вернётся весь каталог',
    enum: Category,
    enumName: 'Category'
  })
  @Field(() => Category, { nullable: true })
  @IsEnum(Category)
  @IsOptional()
  category?: Category;
}
