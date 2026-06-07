import type { PriceVariant, SystemRequirements } from '../entities';

import { DeliveryType, GameGenre, GameType, Region } from './enums';

const PLACEHOLDER_IMAGE = '/static/images/pizza/1.webp';

export interface Game {
  description: string;
  developer: string;
  externalId: string;
  genres: GameGenre[];
  image: string;
  isPopular: boolean;
  minimumSystemRequirements: SystemRequirements;
  name: string;
  priceVariants: PriceVariant[];
  publisher: string;
  recommendedSystemRequirements: SystemRequirements;
  releaseDate: number;
  screenshots: string[];
  slug: string;
  type: GameType;
}

export const GAMES: Game[] = [
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Battlefield 2042',
    slug: 'battlefield-2042',
    externalId: '1517290',
    releaseDate: 1637280000,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Масштабный мультиплеерный шутер с современными картами и техникой.',
    image: PLACEHOLDER_IMAGE,
    isPopular: true,
    developer: 'EA DICE',
    publisher: 'Electronic Arts',
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-9400F',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1050 Ti',
      storage: '150 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-10900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 3070',
      storage: '150 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2688,
        oldPrice: 2999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3299,
        oldPrice: 3499,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Standard',
        price: 2799,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2499,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2399,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2899,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Titanfall 2',
    slug: 'titanfall-2',
    externalId: '1237970',
    releaseDate: 1477612800,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Динамичный sci-fi шутер с паркуром и боями титанов.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Respawn Entertainment',
    publisher: 'Electronic Arts',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 7/10 64-bit',
      processor: 'Intel Core i5-6600K',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 970',
      storage: '65 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-7700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1080',
      storage: '65 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 499,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 899,
        oldPrice: 1199,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.EPIC_KEY,
        edition: 'Standard',
        price: 699,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 299,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 499,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 1299,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Sea of Thieves',
    slug: 'sea-of-thieves',
    externalId: '1172620',
    releaseDate: 1521504000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description: 'Кооперативное пиратское приключение в открытом мире.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Rare',
    publisher: 'Microsoft',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-6600K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 770',
      storage: '150 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-9700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2080',
      storage: '150 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.EPIC_KEY,
        edition: 'Standard',
        price: 1499,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Deluxe',
        price: 1999,
        oldPrice: 2499,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Special',
        price: 1799,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 899,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 1099,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Anniversary',
        price: 1499,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Mortal Kombat 1',
    slug: 'mortal-kombat-1',
    externalId: '1971870',
    releaseDate: 1695081600,
    genres: [GameGenre.ACTION],
    description: 'Файтинг с обновленной вселенной и зрелищными добиваниями.',
    image: PLACEHOLDER_IMAGE,
    developer: 'NetherRealm Studios',
    publisher: 'Warner Bros. Games',
    isPopular: false,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-8700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2070',
      storage: '120 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-10900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 3080',
      storage: '120 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Kollector Edition',
        price: 4999,
        oldPrice: 5999,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Deluxe',
        price: 2299,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1699,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Kollector Edition',
        price: 4599,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2799,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'REMNANT II',
    slug: 'remnant-2',
    externalId: '1282100',
    releaseDate: 1690243200,
    genres: [GameGenre.ACTION, GameGenre.RPG, GameGenre.SHOOTER],
    description: 'Кооперативный экшен-RPG с процедурной генерацией миров.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Gunfire Games',
    publisher: 'Gunfire Games',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-7600K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 970',
      storage: '150 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-9700K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 2080 Ti',
      storage: '150 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2499,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3299,
        oldPrice: 3999,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Collector',
        price: 4299,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2199,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2799,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 3999,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: "Baldur's Gate 3",
    slug: 'baldurs-gate-3',
    externalId: '1086940',
    releaseDate: 1691020800,
    genres: [GameGenre.RPG, GameGenre.STRATEGY, GameGenre.ADVENTURE],
    description: 'Партийная RPG с глубоким сюжетом и пошаговыми боями.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Larian Studios',
    publisher: 'Larian Studios',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-9700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1070',
      storage: '150 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-12900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 3080',
      storage: '150 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 3299,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3999,
        oldPrice: 4599,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.EPIC_KEY,
        edition: 'Collector',
        price: 5999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2799,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 3499,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Collector',
        price: 6499,
        region: Region.EUROPE
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'BattleBit Remastered',
    slug: 'battlebit-remastered',
    externalId: '671860',
    releaseDate: 1686787200,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Массовые PvP-сражения в low-poly стилистике.',
    image: PLACEHOLDER_IMAGE,
    developer: 'StickyBomb Studio',
    publisher: 'StickyBomb Studio',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-9600K',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 1050',
      storage: '50 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i7-12700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2060',
      storage: '50 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 499,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Standard',
        price: 599,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 399,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 359,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 349,
        region: Region.BY
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 799,
        region: Region.UA
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Terraria',
    slug: 'terraria',
    externalId: '105600',
    releaseDate: 1305504000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.INDIE, GameGenre.SURVIVAL],
    description: 'Песочница с исследованием, строительством и боссами.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Re-Logic',
    publisher: '505 Games',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows XP/Vista/7/8/10',
      processor: 'Intel Pentium IV 2.0 GHz',
      memory: '512 MB',
      graphics: 'Integrated Graphics',
      storage: '200 MB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-6600K',
      memory: '4 GB',
      graphics: 'NVIDIA GeForce GTX 460',
      storage: '200 MB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 299,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.NINTENDO_KEY,
        edition: 'Switch Edition',
        price: 699,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 249,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 239,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 229,
        region: Region.BY
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Anniversary',
        price: 499,
        oldPrice: 799,
        region: Region.UA
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: "Garry's Mod",
    slug: 'garrys-mod',
    externalId: '4000',
    releaseDate: 1164758400,
    genres: [GameGenre.INDIE, GameGenre.SIMULATION],
    description: 'Песочница на Source для пользовательских режимов и модов.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Facepunch Studios',
    publisher: 'Facepunch Studios',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows/Mac/Linux',
      processor: 'Intel Pentium 4 2.0 GHz',
      memory: '512 MB',
      graphics: 'NVIDIA GeForce 4',
      storage: '10 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core 2 Duo 2.8 GHz',
      memory: '2 GB',
      graphics: 'NVIDIA GeForce 8800',
      storage: '10 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 199,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 149,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 139,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 129,
        region: Region.BY
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Community Pack',
        price: 299,
        region: Region.UA
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Bundle',
        price: 399,
        region: Region.ALL_WORLD
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Red Dead Redemption 2',
    slug: 'red-dead-redemption-2',
    externalId: '1174180',
    releaseDate: 1540512000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description: 'История банды на Диком Западе в большом открытом мире.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-8700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1660',
      storage: '150 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-10900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 2080 Ti',
      storage: '150 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1699,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Ultimate',
        price: 2499,
        oldPrice: 2999,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1499,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Ultimate',
        price: 2299,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Premium',
        price: 2899,
        region: Region.BY
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Standard',
        price: 1799,
        region: Region.ALL_WORLD
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Cyberpunk 2077',
    slug: 'cyberpunk-2077',
    externalId: '1091500',
    releaseDate: 1607558400,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Ролевая игра в футуристическом Найт-Сити с нелинейными квестами.',
    image: PLACEHOLDER_IMAGE,
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt Red',
    isPopular: false,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-12700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2060',
      storage: '160 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-12900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 3080',
      storage: '160 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Ultimate',
        price: 1999,
        oldPrice: 2499,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.EPIC_KEY,
        edition: 'Standard',
        price: 1099,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 799,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 1299,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 2499,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Elden Ring',
    slug: 'elden-ring',
    externalId: '1245620',
    releaseDate: 1645747200,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Soulslike с открытым миром и насыщенным исследованием.',
    image: PLACEHOLDER_IMAGE,
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-10700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1070',
      storage: '60 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-12900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 3070',
      storage: '60 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2499,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3499,
        oldPrice: 3999,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Collector',
        price: 4499,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2199,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2999,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 3999,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Helldivers 2',
    slug: 'helldivers-2',
    externalId: '553850',
    releaseDate: 1707350400,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Кооперативный PvE-шутер про межгалактическую демократию.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Arrowhead Game Studios',
    publisher: 'Sony Interactive Entertainment',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-9700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1080',
      storage: '100 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-10900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 2080 Ti',
      storage: '100 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1299,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 1699,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Premium',
        price: 2199,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1099,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 1699,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Premium',
        price: 1999,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Palworld',
    slug: 'palworld',
    externalId: '1623730',
    releaseDate: 1705622400,
    genres: [GameGenre.ADVENTURE, GameGenre.SURVIVAL],
    description: 'Выживание, крафт и коллекционирование существ в открытом мире.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Pocketpair',
    publisher: 'Pocketpair',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i9-9900K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1070',
      storage: '50 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-12900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 3070',
      storage: '50 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Collector',
        price: 2499,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1699,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2299,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Premium',
        price: 2799,
        region: Region.BY
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1599,
        region: Region.UA
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],
    type: GameType.GAME,
    name: 'Black Myth: Wukong',
    slug: 'black-myth-wukong',
    externalId: '2358720',
    releaseDate: 1724112000,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Экшен по мотивам китайской мифологии с кинематографичными боями.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Game Science',
    publisher: 'Game Science',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i9-9900K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2080',
      storage: '130 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-12900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 4090',
      storage: '130 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2799,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Collector',
        price: 4799,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2399,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 3299,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 4499,
        region: Region.BY
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Premium',
        price: 3599,
        region: Region.ALL_WORLD
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],

    type: GameType.GAME,
    name: 'Hades II',
    slug: 'hades-2',
    externalId: '1145350',
    releaseDate: 1714953600,
    genres: [GameGenre.ACTION, GameGenre.INDIE],
    description: 'Рогалик с быстрым боем, билдостроением и сильным нарративом.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Supergiant Games',
    publisher: 'Supergiant Games',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-8400',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 970',
      storage: '30 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i7-10700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2080',
      storage: '30 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1499,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 1799,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.NINTENDO_KEY,
        edition: 'Switch Edition',
        price: 1699,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1299,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 1599,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Indie Pack',
        price: 1999,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],

    type: GameType.GAME,
    name: 'Stardew Valley',
    slug: 'stardew-valley',
    externalId: '413150',
    releaseDate: 1456444800,
    genres: [GameGenre.INDIE, GameGenre.SIMULATION, GameGenre.RPG],
    description: 'Фермерский симулятор с прокачкой, отношениями и крафтом.',
    image: PLACEHOLDER_IMAGE,
    developer: 'ConcernedApe',
    publisher: 'ConcernedApe',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows Vista/7/8/10',
      processor: 'Intel Pentium IV 2.8 GHz',
      memory: '512 MB',
      graphics: 'Integrated Graphics',
      storage: '200 MB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-8400',
      memory: '2 GB',
      graphics: 'NVIDIA GeForce GTX 670',
      storage: '200 MB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 399,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.NINTENDO_KEY,
        edition: 'Switch Edition',
        price: 799,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 349,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 329,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 599,
        region: Region.BY
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Complete',
        price: 899,
        region: Region.ALL_WORLD
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],

    type: GameType.GAME,
    name: 'Hogwarts Legacy',
    slug: 'hogwarts-legacy',
    externalId: '990080',
    releaseDate: 1675987200,
    genres: [GameGenre.ACTION, GameGenre.RPG, GameGenre.ADVENTURE],
    description: 'Открытый мир Хогвартса с магическими дуэлями и квестами.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Avalanche Software',
    publisher: 'Warner Bros. Games',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-9700',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1080',
      storage: '100 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-11900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 3080',
      storage: '100 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2499,
        oldPrice: 3999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe Edition',
        price: 4299,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Collector',
        price: 4999,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2199,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe Edition',
        price: 3899,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 4599,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],

    type: GameType.GAME,
    name: 'Lethal Company',
    slug: 'lethal-company',
    externalId: '1966720',
    releaseDate: 1698019200,
    genres: [GameGenre.HORROR, GameGenre.INDIE],
    description: 'Кооперативный хоррор про сбор лута на опасных локациях.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Zeekerss',
    publisher: 'Zeekerss',
    isPopular: false,
    minimumSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-8400',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 1050',
      storage: '20 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i7-9700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2060',
      storage: '20 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 299,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 249,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 229,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Horror Pack',
        price: 499,
        region: Region.BY
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 699,
        region: Region.UA
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Bundle',
        price: 799,
        region: Region.ALL_WORLD
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],

    type: GameType.GAME,
    name: 'The Finals',
    slug: 'the-finals',
    externalId: '2073850',
    releaseDate: 1701907200,
    genres: [GameGenre.SHOOTER, GameGenre.ACTION],
    description: 'Соревновательный шутер с разрушаемым окружением.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Embark Studios',
    publisher: 'Embark Studios',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-9700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1080',
      storage: '70 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-12900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 3070',
      storage: '70 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Standard',
        price: 1099,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 899,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Founders Pack',
        price: 1299,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Founders Pack',
        price: 1499,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Exclusive',
        price: 1999,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],

    type: GameType.GAME,
    name: 'EA SPORTS FC 25',
    slug: 'ea-sports-fc-25',
    externalId: '2669320',
    releaseDate: 1727395200,
    genres: [GameGenre.SPORTS, GameGenre.SIMULATION],
    description: 'Футбольный симулятор с актуальными составами и онлайн-режимами.',
    image: PLACEHOLDER_IMAGE,
    developer: 'EA Sports',
    publisher: 'Electronic Arts',
    isPopular: false,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-9600K',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 1050 Ti',
      storage: '50 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i7-12700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2070',
      storage: '50 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 3999,
        oldPrice: 4999,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Ultimate',
        price: 6999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Deluxe',
        price: 4999,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 3499,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 4499,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Ultimate',
        price: 6499,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],

    type: GameType.GAME,
    name: 'Forza Horizon 5',
    slug: 'forza-horizon-5',
    externalId: '1551360',
    releaseDate: 1636416000,
    genres: [GameGenre.RACING, GameGenre.SIMULATION],
    description: 'Аркадные гонки в открытом мире Мексики.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Playground Games',
    publisher: 'Microsoft',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-8400',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 1070',
      storage: '100 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-10900K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2080',
      storage: '100 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Standard',
        price: 1999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Deluxe',
        price: 3499,
        oldPrice: 3999,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Premium',
        price: 5999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1799,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 3299,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Premium',
        price: 4599,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],

    isPopular: false,
    type: GameType.GAME,
    name: 'Assassin’s Creed Shadows',
    slug: 'assassins-creed-shadows',
    externalId: '3159330',
    releaseDate: 1742428800,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.RPG],
    description: 'Стелс-экшен в феодальной Японии с двумя протагонистами.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Ubisoft Montpellier',
    publisher: 'Ubisoft',
    minimumSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-10700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2070',
      storage: '110 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-12900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 3080',
      storage: '110 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3799,
        oldPrice: 4299,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Standard',
        price: 3499,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2399,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2999,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 4499,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE],

    type: GameType.GAME,
    name: 'GTA VI',
    slug: 'gta-6',
    externalId: 'gta6',
    releaseDate: 1795046400,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description: 'Криминальный open-world экшен нового поколения.',
    image: PLACEHOLDER_IMAGE,
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-12700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2080',
      storage: '150 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i9-12900K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 4090',
      storage: '150 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 3999,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 4999,
        oldPrice: 5999,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Standard',
        price: 4499,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Standard',
        price: 4499,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 3499,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 3999,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Premium',
        price: 5499,
        region: Region.BY
      }
    ]
  }
];
