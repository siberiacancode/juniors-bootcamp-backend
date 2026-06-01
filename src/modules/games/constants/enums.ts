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

registerEnumType(GameGenre, {
  name: 'GameGenre'
});
