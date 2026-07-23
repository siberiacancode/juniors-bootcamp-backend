import { registerEnumType } from '@nestjs/graphql';

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
  description: 'Размер продукта'
});

export enum Category {
  PIZZA = 'pizza',
  BREAKFAST = 'breakfast',
  WINGS = 'wings',
  MILKSHAKE = 'milkshake'
}

registerEnumType(Category, {
  name: 'Category',
  description: 'Категория продукта'
});

export enum Option {
  CRUST_THIN = 'crust_thin',
  CRUST_THICK = 'crust_thick',
  CRUST_CHEESE = 'crust_cheese',
  CREAM_WITH = 'cream_with',
  CREAM_WITHOUT = 'cream_without'
}

registerEnumType(Option, {
  name: 'Option',
  description: 'Доп-опции продукта'
});
