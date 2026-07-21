import { registerEnumType } from '@nestjs/graphql';

export enum Dough {
  THIN = 'thin',
  THICK = 'thick'
}

registerEnumType(Dough, {
  name: 'Dough',
  description: 'Тесто'
});

export enum Ingredient {
  PINEAPPLE = 'pineapple',
  MOZZARELLA = 'mozzarella',
  PEPPERONI = 'pepperoni',
  GREEN_PEPPER = 'green_pepper',
  MUSHROOMS = 'mushrooms',
  BASIL = 'basil',
  CHEDDAR = 'cheddar',
  PARMESAN = 'parmesan',
  FETA = 'feta',
  HAM = 'ham',
  PICKLE = 'pickle',
  TOMATO = 'tomato',
  BACON = 'bacon',
  ONION = 'onion',
  CHILE = 'chile',
  SHRIMP = 'shrimp',
  CHICKEN_FILLET = 'chicken_fillet',
  MEATBALLS = 'meatballs'
}

registerEnumType(Ingredient, {
  name: 'Ingredient',
  description: 'Ингредиенты'
});

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

registerEnumType(Size, {
  name: 'Size',
  description: 'Размер пиццы'
});
