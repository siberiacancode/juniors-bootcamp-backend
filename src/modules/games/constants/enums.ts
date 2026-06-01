import { registerEnumType } from '@nestjs/graphql';

export enum GameGenre {
  ACTION = 'ACTION',
  ADVENTURE = 'ADVENTURE',
  RPG = 'RPG',
  STRATEGY = 'STRATEGY',
  SHOOTER = 'SHOOTER',
  SIMULATION = 'SIMULATION',
  SURVIVAL = 'SURVIVAL',
  SPORTS = 'SPORTS',
  RACING = 'RACING',
  INDIE = 'INDIE',
  HORROR = 'HORROR'
}

registerEnumType(GameGenre, {
  name: 'GameGenre'
});
