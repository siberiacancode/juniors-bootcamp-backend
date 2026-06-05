import type { Game } from '../entities';

import { DeliveryType, GameGenre, Region } from './enums';

const PLACEHOLDER_IMAGE = '/static/images/pizza/1.webp';

export const GAMES: Game[] = [
  {
    name: 'Battlefield 2042',
    slug: 'battlefield-2042',
    externalId: '1517290',
    releaseDate: 1637280000,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Масштабный мультиплеерный шутер с современными картами и техникой.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2688,
        oldPrice: 2999,
        region: Region.ALL_WORLD
      }
    ],
    rating: 57.78
  },
  {
    name: 'Titanfall 2',
    slug: 'titanfall-2',
    externalId: '1237970',

    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Динамичный sci-fi шутер с паркуром и боями титанов.',
    image: PLACEHOLDER_IMAGE,
    rating: 94.44
  },
  {
    name: 'Sea of Thieves',
    slug: 'sea-of-thieves',
    externalId: '1172620',
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description: 'Кооперативное пиратское приключение в открытом мире.',
    image: PLACEHOLDER_IMAGE,
    rating: 90.25
  },
  {
    name: 'Mortal Kombat 1',
    slug: 'mortal-kombat-1',
    externalId: '1971870',
    genres: [GameGenre.ACTION],
    description: 'Файтинг с обновленной вселенной и зрелищными добиваниями.',
    image: PLACEHOLDER_IMAGE,
    rating: 67.72
  },
  {
    name: 'REMNANT II',
    slug: 'remnant-2',
    externalId: '1282100',
    genres: [GameGenre.ACTION, GameGenre.RPG, GameGenre.SHOOTER],
    description: 'Кооперативный экшен-RPG с процедурной генерацией миров.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: "Baldur's Gate 3",
    slug: 'baldurs-gate-3',
    externalId: '1086940',
    genres: [GameGenre.RPG, GameGenre.STRATEGY, GameGenre.ADVENTURE],
    description: 'Партийная RPG с глубоким сюжетом и пошаговыми боями.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'BattleBit Remastered',
    slug: 'battlebit-remastered',
    externalId: '671860',
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Массовые PvP-сражения в low-poly стилистике.',
    image: PLACEHOLDER_IMAGE,
    rating: 82.62
  },
  {
    name: 'Terraria',
    slug: 'terraria',
    externalId: '105600',
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.INDIE, GameGenre.SURVIVAL],
    description: 'Песочница с исследованием, строительством и боссами.',
    image: PLACEHOLDER_IMAGE,
    rating: 96.91
  },
  {
    name: "Garry's Mod",
    slug: 'garrys-mod',
    externalId: '4000',
    genres: [GameGenre.INDIE, GameGenre.SIMULATION],
    description: 'Песочница на Source для пользовательских режимов и модов.',
    image: PLACEHOLDER_IMAGE,
    rating: 96.49
  },
  {
    name: 'Red Dead Redemption 2',
    slug: 'red-dead-redemption-2',
    externalId: '1174180',
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description: 'История банды на Диком Западе в большом открытом мире.',
    image: PLACEHOLDER_IMAGE,
    rating: 93.01
  },
  {
    name: 'Cyberpunk 2077',
    slug: 'cyberpunk-2077',
    externalId: '1091500',
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Ролевая игра в футуристическом Найт-Сити с нелинейными квестами.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Elden Ring',
    slug: 'elden-ring',
    externalId: '1245620',
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Soulslike с открытым миром и насыщенным исследованием.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Helldivers 2',
    slug: 'helldivers-2',
    externalId: '553850',
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Кооперативный PvE-шутер про межгалактическую демократию.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Palworld',
    slug: 'palworld',
    externalId: '1623730',
    genres: [GameGenre.ADVENTURE, GameGenre.SURVIVAL],
    description: 'Выживание, крафт и коллекционирование существ в открытом мире.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Black Myth: Wukong',
    slug: 'black-myth-wukong',
    externalId: '2358720',
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Экшен по мотивам китайской мифологии с кинематографичными боями.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Hades II',
    slug: 'hades-2',
    externalId: '1145350',
    genres: [GameGenre.ACTION, GameGenre.INDIE],
    description: 'Рогалик с быстрым боем, билдостроением и сильным нарративом.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Stardew Valley',
    slug: 'stardew-valley',
    externalId: '413150',
    genres: [GameGenre.INDIE, GameGenre.SIMULATION, GameGenre.RPG],
    description: 'Фермерский симулятор с прокачкой, отношениями и крафтом.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Hogwarts Legacy',
    slug: 'hogwarts-legacy',
    externalId: '990080',
    genres: [GameGenre.ACTION, GameGenre.RPG, GameGenre.ADVENTURE],
    description: 'Открытый мир Хогвартса с магическими дуэлями и квестами.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Lethal Company',
    slug: 'lethal-company',
    externalId: '1966720',
    genres: [GameGenre.HORROR, GameGenre.INDIE],
    description: 'Кооперативный хоррор про сбор лута на опасных локациях.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'The Finals',
    slug: 'the-finals',
    externalId: '2073850',
    genres: [GameGenre.SHOOTER, GameGenre.ACTION],
    description: 'Соревновательный шутер с разрушаемым окружением.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'EA SPORTS FC 25',
    slug: 'ea-sports-fc-25',
    externalId: '2669320',
    genres: [GameGenre.SPORTS, GameGenre.SIMULATION],
    description: 'Футбольный симулятор с актуальными составами и онлайн-режимами.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Forza Horizon 5',
    slug: 'forza-horizon-5',
    externalId: '1551360',
    genres: [GameGenre.RACING, GameGenre.SIMULATION],
    description: 'Аркадные гонки в открытом мире Мексики.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Farming Simulator 25',
    slug: 'farming-simulator-25',
    externalId: '2300320',
    genres: [GameGenre.SIMULATION],
    description: 'Современный симулятор фермы с техникой и кооперативом.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'S.T.A.L.K.E.R. 2',
    slug: 'stalker-2',
    externalId: '1643320',
    genres: [GameGenre.SHOOTER, GameGenre.SURVIVAL, GameGenre.HORROR],
    description: 'Выживание и исследование Зоны в атмосферном FPS.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Avowed',
    slug: 'avowed',
    externalId: '2457220',
    genres: [GameGenre.RPG, GameGenre.ACTION],
    description: 'Фэнтезийная RPG от первого лица во вселенной Pillars of Eternity.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Monster Hunter Wilds',
    slug: 'monster-hunter-wilds',
    externalId: '2246340',
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Охота на гигантских монстров в живом экосистемном мире.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Dune: Awakening',
    slug: 'dune-awakening',
    externalId: '1172710',
    genres: [GameGenre.SURVIVAL, GameGenre.ACTION, GameGenre.ADVENTURE],
    description: 'MMO-выживание на Арракисе с политикой и ресурсной борьбой.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Kingdom Come: Deliverance II',
    slug: 'kingdom-come-deliverance-2',
    externalId: '1771300',
    genres: [GameGenre.RPG, GameGenre.ADVENTURE],
    description: 'Историческая RPG с упором на реализм и сюжетные выборы.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'Assassin’s Creed Shadows',
    slug: 'assassins-creed-shadows',
    externalId: '3159330',
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.RPG],
    description: 'Стелс-экшен в феодальной Японии с двумя протагонистами.',
    image: PLACEHOLDER_IMAGE
  },
  {
    name: 'GTA VI',
    slug: 'gta-6',
    externalId: 'gta6',
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description: 'Криминальный open-world экшен нового поколения.',
    image: PLACEHOLDER_IMAGE
  }
];
