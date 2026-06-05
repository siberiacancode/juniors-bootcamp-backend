import { registerEnumType } from '@nestjs/graphql';

export enum GameGenre {
  ACTION = 'action',
  ADVENTURE = 'adventure',
  RPG = 'rpg',
  STRATEGY = 'strategy',
  SHOOTER = 'shooter',
  SIMULATION = 'simulation',
  SURVIVAL = 'survival',
  SPORTS = 'sports',
  RACING = 'racing',
  INDIE = 'indie',
  HORROR = 'horror'
}

export enum DeliveryType {
  STEAM_KEY = 'steam_key',
  EPIC_KEY = 'epic_key',
  STEAM_GIFT = 'steam_gift',
  NINTENDO_KEY = 'nintendo_key',
  XBOX_KEY = 'xbox_key',
  PLAYSTATION_KEY = 'playstation_key'
}

export enum Region {
  RU = 'ru',
  KZ = 'kz',
  BY = 'by',
  UA = 'ua',
  PL = 'pl',
  TR = 'tr',
  ALL_WORLD = 'all_world',
  EUROPE = 'europe',
  ASIA = 'asia'
}

registerEnumType(GameGenre, {
  name: 'GameGenre'
});
