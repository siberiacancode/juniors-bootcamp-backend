import { registerEnumType } from '@nestjs/graphql';

export enum Brand {
  HAVAL = 'Haval',
  HYUNDAI = 'Hyundai',
  VOLKSWAGEN = 'Volkswagen',
  KIA = 'Kia',
  GEELY = 'Geely',
  MERCEDES = 'Mercedes',
  GARDEN_CAR = 'Garden car',
  GROCERY_CART = 'Grocery cart',
  HAIER = 'Haier',
  INVALID = 'Invalid'
}

export enum BodyType {
  SEDAN = 'sedan',
  SUV = 'suv',
  COUPE = 'coupe',
  HATCHBACK = 'hatchback',
  CABRIOLET = 'cabriolet'
}

export enum Steering {
  LEFT = 'left',
  RIGHT = 'right'
}

export enum Transmission {
  AUTOMATIC = 'automatic',
  MANUAL = 'manual'
}

export enum Color {
  BLACK = 'black',
  WHITE = 'white',
  RED = 'red',
  SILVER = 'silver',
  BLUE = 'blue',
  GREY = 'grey',
  ORANGE = 'orange'
}

registerEnumType(Brand, { name: 'Brand' });
registerEnumType(Transmission, { name: 'Transmission' });
registerEnumType(Color, { name: 'Color' });
registerEnumType(BodyType, { name: 'BodyType' });
registerEnumType(Steering, { name: 'Steering' });
