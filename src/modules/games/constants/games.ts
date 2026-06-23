import type { PriceVariant, SystemRequirements } from '../entities';

import { DeliveryType, GameGenre, GameType, Region } from './enums';

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
    screenshots: [
      '/static/images/games/battlefield-2042__screenshot-1.jpg',
      '/static/images/games/battlefield-2042__screenshot-2.jpg',
      '/static/images/games/battlefield-2042__screenshot-3.jpg',
      '/static/images/games/battlefield-2042__screenshot-4.jpg',
      '/static/images/games/battlefield-2042__screenshot-5.jpg',
      '/static/images/games/battlefield-2042__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Battlefield 2042',
    slug: 'battlefield-2042',
    externalId: '1517290',
    releaseDate: 1637280000,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description:
      'РњР°СЃС€С‚Р°Р±РЅС‹Р№ РјСѓР»СЊС‚РёРїР»РµРµСЂРЅС‹Р№ С€СѓС‚РµСЂ СЃ СЃРѕРІСЂРµРјРµРЅРЅС‹РјРё РєР°СЂС‚Р°РјРё Рё С‚РµС…РЅРёРєРѕР№.',
    image: '/static/images/games/battlefield-2042__header.jpg',
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
    screenshots: [
      '/static/images/games/titanfall-2__screenshot-1.jpg',
      '/static/images/games/titanfall-2__screenshot-2.jpg',
      '/static/images/games/titanfall-2__screenshot-3.jpg',
      '/static/images/games/titanfall-2__screenshot-4.jpg',
      '/static/images/games/titanfall-2__screenshot-5.jpg'
    ],
    type: GameType.GAME,
    name: 'Titanfall 2',
    slug: 'titanfall-2',
    externalId: '1237970',
    releaseDate: 1477612800,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description:
      'Р”РёРЅР°РјРёС‡РЅС‹Р№ sci-fi С€СѓС‚РµСЂ СЃ РїР°СЂРєСѓСЂРѕРј Рё Р±РѕСЏРјРё С‚РёС‚Р°РЅРѕРІ.',
    image: '/static/images/games/titanfall-2__header.jpg',
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
    screenshots: [
      '/static/images/games/sea-of-thieves__screenshot-1.jpg',
      '/static/images/games/sea-of-thieves__screenshot-2.jpg',
      '/static/images/games/sea-of-thieves__screenshot-3.jpg',
      '/static/images/games/sea-of-thieves__screenshot-4.jpg',
      '/static/images/games/sea-of-thieves__screenshot-5.jpg',
      '/static/images/games/sea-of-thieves__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Sea of Thieves',
    slug: 'sea-of-thieves',
    externalId: '1172620',
    releaseDate: 1521504000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description:
      'РљРѕРѕРїРµСЂР°С‚РёРІРЅРѕРµ РїРёСЂР°С‚СЃРєРѕРµ РїСЂРёРєР»СЋС‡РµРЅРёРµ РІ РѕС‚РєСЂС‹С‚РѕРј РјРёСЂРµ.',
    image: '/static/images/games/sea-of-thieves__header.jpg',
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
    screenshots: [
      '/static/images/games/mortal-kombat-1__screenshot-1.jpg',
      '/static/images/games/mortal-kombat-1__screenshot-2.jpg',
      '/static/images/games/mortal-kombat-1__screenshot-3.jpg',
      '/static/images/games/mortal-kombat-1__screenshot-4.jpg',
      '/static/images/games/mortal-kombat-1__screenshot-5.jpg',
      '/static/images/games/mortal-kombat-1__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Mortal Kombat 1',
    slug: 'mortal-kombat-1',
    externalId: '1971870',
    releaseDate: 1695081600,
    genres: [GameGenre.ACTION],
    description:
      'Р¤Р°Р№С‚РёРЅРі СЃ РѕР±РЅРѕРІР»РµРЅРЅРѕР№ РІСЃРµР»РµРЅРЅРѕР№ Рё Р·СЂРµР»РёС‰РЅС‹РјРё РґРѕР±РёРІР°РЅРёСЏРјРё.',
    image: '/static/images/games/mortal-kombat-1__header.jpg',
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
    screenshots: [
      '/static/images/games/remnant-2__screenshot-1.jpg',
      '/static/images/games/remnant-2__screenshot-2.jpg',
      '/static/images/games/remnant-2__screenshot-3.jpg',
      '/static/images/games/remnant-2__screenshot-4.jpg',
      '/static/images/games/remnant-2__screenshot-5.jpg',
      '/static/images/games/remnant-2__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'REMNANT II',
    slug: 'remnant-2',
    externalId: '1282100',
    releaseDate: 1690243200,
    genres: [GameGenre.ACTION, GameGenre.RPG, GameGenre.SHOOTER],
    description:
      'РљРѕРѕРїРµСЂР°С‚РёРІРЅС‹Р№ СЌРєС€РµРЅ-RPG СЃ РїСЂРѕС†РµРґСѓСЂРЅРѕР№ РіРµРЅРµСЂР°С†РёРµР№ РјРёСЂРѕРІ.',
    image: '/static/images/games/remnant-2__header.jpg',
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
    screenshots: [
      '/static/images/games/baldurs-gate-3__screenshot-1.jpg',
      '/static/images/games/baldurs-gate-3__screenshot-2.jpg',
      '/static/images/games/baldurs-gate-3__screenshot-3.jpg',
      '/static/images/games/baldurs-gate-3__screenshot-4.jpg',
      '/static/images/games/baldurs-gate-3__screenshot-5.jpg',
      '/static/images/games/baldurs-gate-3__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: "Baldur's Gate 3",
    slug: 'baldurs-gate-3',
    externalId: '1086940',
    releaseDate: 1691020800,
    genres: [GameGenre.RPG, GameGenre.STRATEGY, GameGenre.ADVENTURE],
    description:
      'РџР°СЂС‚РёР№РЅР°СЏ RPG СЃ РіР»СѓР±РѕРєРёРј СЃСЋР¶РµС‚РѕРј Рё РїРѕС€Р°РіРѕРІС‹РјРё Р±РѕСЏРјРё.',
    image: '/static/images/games/baldurs-gate-3__header.jpg',
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
    screenshots: [
      '/static/images/games/battlebit-remastered__screenshot-1.jpg',
      '/static/images/games/battlebit-remastered__screenshot-2.jpg',
      '/static/images/games/battlebit-remastered__screenshot-3.jpg',
      '/static/images/games/battlebit-remastered__screenshot-4.jpg',
      '/static/images/games/battlebit-remastered__screenshot-5.jpg',
      '/static/images/games/battlebit-remastered__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'BattleBit Remastered',
    slug: 'battlebit-remastered',
    externalId: '671860',
    releaseDate: 1686787200,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'РњР°СЃСЃРѕРІС‹Рµ PvP-СЃСЂР°Р¶РµРЅРёСЏ РІ low-poly СЃС‚РёР»РёСЃС‚РёРєРµ.',
    image: '/static/images/games/battlebit-remastered__header.jpg',
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
    screenshots: [
      '/static/images/games/terraria__screenshot-1.jpg',
      '/static/images/games/terraria__screenshot-2.jpg',
      '/static/images/games/terraria__screenshot-3.jpg',
      '/static/images/games/terraria__screenshot-4.jpg',
      '/static/images/games/terraria__screenshot-5.jpg',
      '/static/images/games/terraria__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Terraria',
    slug: 'terraria',
    externalId: '105600',
    releaseDate: 1305504000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.INDIE, GameGenre.SURVIVAL],
    description:
      'РџРµСЃРѕС‡РЅРёС†Р° СЃ РёСЃСЃР»РµРґРѕРІР°РЅРёРµРј, СЃС‚СЂРѕРёС‚РµР»СЊСЃС‚РІРѕРј Рё Р±РѕСЃСЃР°РјРё.',
    image: '/static/images/games/terraria__header.jpg',
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
    type: GameType.DLC,
    name: 'Cyberpunk 2077: РџСЂРёР·СЂР°С‡РЅР°СЏ СЃРІРѕР±РѕРґР°',
    description:
      'В«РџСЂРёР·СЂР°С‡РЅР°СЏ СЃРІРѕР±РѕРґР°В» вЂ” СЌС‚Рѕ РґРѕРїРѕР»РЅРµРЅРёРµ, РґРѕР±Р°РІР»СЏСЋС‰РµРµ СЌР»РµРјРµРЅС‚С‹ С€РїРёРѕРЅСЃРєРѕРіРѕ С‚СЂРёР»Р»РµСЂР°.',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    image: '/static/images/games/cyberpunk-2077-prizrachnaya-svoboda__header.jpg',
    externalId: '2138330',
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.SURVIVAL],
    releaseDate: 1695686400,
    screenshots: [
      '/static/images/games/cyberpunk-2077-prizrachnaya-svoboda__screenshot-1.jpg',
      '/static/images/games/cyberpunk-2077-prizrachnaya-svoboda__screenshot-2.jpg',
      '/static/images/games/cyberpunk-2077-prizrachnaya-svoboda__screenshot-3.jpg',
      '/static/images/games/cyberpunk-2077-prizrachnaya-svoboda__screenshot-4.jpg',
      '/static/images/games/cyberpunk-2077-prizrachnaya-svoboda__screenshot-5.jpg',
      '/static/images/games/cyberpunk-2077-prizrachnaya-svoboda__screenshot-6.jpg'
    ],
    slug: 'cyberpunk-2077-prizrachnaya-svoboda',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-6600K',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 1060',
      storage: '50 GB'
    },
    recommendedSystemRequirements: {
      graphics: 'NVIDIA GeForce GTX 1060',
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-6600K',
      memory: '8 GB',
      storage: '50 GB'
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
        price: 239,
        region: Region.KZ
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 229,
        region: Region.BY
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/garrys-mod__screenshot-1.jpg',
      '/static/images/games/garrys-mod__screenshot-2.jpg',
      '/static/images/games/garrys-mod__screenshot-3.jpg',
      '/static/images/games/garrys-mod__screenshot-4.jpg',
      '/static/images/games/garrys-mod__screenshot-5.jpg',
      '/static/images/games/garrys-mod__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: "Garry's Mod",
    slug: 'garrys-mod',
    externalId: '4000',
    releaseDate: 1164758400,
    genres: [GameGenre.INDIE, GameGenre.SIMULATION],
    description:
      'РџРµСЃРѕС‡РЅРёС†Р° РЅР° Source РґР»СЏ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёС… СЂРµР¶РёРјРѕРІ Рё РјРѕРґРѕРІ.',
    image: '/static/images/games/garrys-mod__header.jpg',
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
    screenshots: [
      '/static/images/games/red-dead-redemption-2__screenshot-1.jpg',
      '/static/images/games/red-dead-redemption-2__screenshot-2.jpg',
      '/static/images/games/red-dead-redemption-2__screenshot-3.jpg',
      '/static/images/games/red-dead-redemption-2__screenshot-4.jpg',
      '/static/images/games/red-dead-redemption-2__screenshot-5.jpg'
    ],
    type: GameType.GAME,
    name: 'Red Dead Redemption 2',
    slug: 'red-dead-redemption-2',
    externalId: '1174180',
    releaseDate: 1540512000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description:
      'РСЃС‚РѕСЂРёСЏ Р±Р°РЅРґС‹ РЅР° Р”РёРєРѕРј Р—Р°РїР°РґРµ РІ Р±РѕР»СЊС€РѕРј РѕС‚РєСЂС‹С‚РѕРј РјРёСЂРµ.',
    image: '/static/images/games/red-dead-redemption-2__header.jpg',
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
    screenshots: [
      '/static/images/games/cyberpunk-2077__screenshot-1.jpg',
      '/static/images/games/cyberpunk-2077__screenshot-2.jpg',
      '/static/images/games/cyberpunk-2077__screenshot-3.jpg',
      '/static/images/games/cyberpunk-2077__screenshot-4.jpg',
      '/static/images/games/cyberpunk-2077__screenshot-5.jpg',
      '/static/images/games/cyberpunk-2077__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Cyberpunk 2077',
    slug: 'cyberpunk-2077',
    externalId: '1091500',
    releaseDate: 1607558400,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description:
      'Р РѕР»РµРІР°СЏ РёРіСЂР° РІ С„СѓС‚СѓСЂРёСЃС‚РёС‡РµСЃРєРѕРј РќР°Р№С‚-РЎРёС‚Рё СЃ РЅРµР»РёРЅРµР№РЅС‹РјРё РєРІРµСЃС‚Р°РјРё.',
    image: '/static/images/games/cyberpunk-2077__header.jpg',
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
    screenshots: [
      '/static/images/games/elden-ring__screenshot-1.jpg',
      '/static/images/games/elden-ring__screenshot-2.jpg',
      '/static/images/games/elden-ring__screenshot-3.jpg',
      '/static/images/games/elden-ring__screenshot-4.jpg',
      '/static/images/games/elden-ring__screenshot-5.jpg',
      '/static/images/games/elden-ring__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Elden Ring',
    slug: 'elden-ring',
    externalId: '1245620',
    releaseDate: 1645747200,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description:
      'Soulslike СЃ РѕС‚РєСЂС‹С‚С‹Рј РјРёСЂРѕРј Рё РЅР°СЃС‹С‰РµРЅРЅС‹Рј РёСЃСЃР»РµРґРѕРІР°РЅРёРµРј.',
    image: '/static/images/games/elden-ring__header.jpg',
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
    screenshots: [
      '/static/images/games/helldivers-2__screenshot-1.jpg',
      '/static/images/games/helldivers-2__screenshot-2.jpg',
      '/static/images/games/helldivers-2__screenshot-3.jpg',
      '/static/images/games/helldivers-2__screenshot-4.jpg',
      '/static/images/games/helldivers-2__screenshot-5.jpg',
      '/static/images/games/helldivers-2__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Helldivers 2',
    slug: 'helldivers-2',
    externalId: '553850',
    releaseDate: 1707350400,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description:
      'РљРѕРѕРїРµСЂР°С‚РёРІРЅС‹Р№ PvE-С€СѓС‚РµСЂ РїСЂРѕ РјРµР¶РіР°Р»Р°РєС‚РёС‡РµСЃРєСѓСЋ РґРµРјРѕРєСЂР°С‚РёСЋ.',
    image: '/static/images/games/helldivers-2__header.jpg',
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
    screenshots: [
      '/static/images/games/palworld__screenshot-1.jpg',
      '/static/images/games/palworld__screenshot-2.jpg',
      '/static/images/games/palworld__screenshot-3.jpg',
      '/static/images/games/palworld__screenshot-4.jpg',
      '/static/images/games/palworld__screenshot-5.jpg',
      '/static/images/games/palworld__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Palworld',
    slug: 'palworld',
    externalId: '1623730',
    releaseDate: 1705622400,
    genres: [GameGenre.ADVENTURE, GameGenre.SURVIVAL],
    description:
      'Р’С‹Р¶РёРІР°РЅРёРµ, РєСЂР°С„С‚ Рё РєРѕР»Р»РµРєС†РёРѕРЅРёСЂРѕРІР°РЅРёРµ СЃСѓС‰РµСЃС‚РІ РІ РѕС‚РєСЂС‹С‚РѕРј РјРёСЂРµ.',
    image: '/static/images/games/palworld__header.jpg',
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
    screenshots: [
      '/static/images/games/black-myth-wukong__screenshot-1.jpg',
      '/static/images/games/black-myth-wukong__screenshot-2.jpg',
      '/static/images/games/black-myth-wukong__screenshot-3.jpg',
      '/static/images/games/black-myth-wukong__screenshot-4.jpg',
      '/static/images/games/black-myth-wukong__screenshot-5.jpg',
      '/static/images/games/black-myth-wukong__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Black Myth: Wukong',
    slug: 'black-myth-wukong',
    externalId: '2358720',
    releaseDate: 1724112000,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description:
      'Р­РєС€РµРЅ РїРѕ РјРѕС‚РёРІР°Рј РєРёС‚Р°Р№СЃРєРѕР№ РјРёС„РѕР»РѕРіРёРё СЃ РєРёРЅРµРјР°С‚РѕРіСЂР°С„РёС‡РЅС‹РјРё Р±РѕСЏРјРё.',
    image: '/static/images/games/black-myth-wukong__header.jpg',
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
    screenshots: [
      '/static/images/games/hades-2__screenshot-1.jpg',
      '/static/images/games/hades-2__screenshot-2.jpg',
      '/static/images/games/hades-2__screenshot-3.jpg',
      '/static/images/games/hades-2__screenshot-4.jpg',
      '/static/images/games/hades-2__screenshot-5.jpg',
      '/static/images/games/hades-2__screenshot-6.jpg'
    ],

    type: GameType.GAME,
    name: 'Hades II',
    slug: 'hades-2',
    externalId: '1145350',
    releaseDate: 1714953600,
    genres: [GameGenre.ACTION, GameGenre.INDIE],
    description:
      'Р РѕРіР°Р»РёРє СЃ Р±С‹СЃС‚СЂС‹Рј Р±РѕРµРј, Р±РёР»РґРѕСЃС‚СЂРѕРµРЅРёРµРј Рё СЃРёР»СЊРЅС‹Рј РЅР°СЂСЂР°С‚РёРІРѕРј.',
    image: '/static/images/games/hades-2__header.jpg',
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
    screenshots: [
      '/static/images/games/stardew-valley__screenshot-1.jpg',
      '/static/images/games/stardew-valley__screenshot-2.jpg',
      '/static/images/games/stardew-valley__screenshot-3.jpg',
      '/static/images/games/stardew-valley__screenshot-4.jpg',
      '/static/images/games/stardew-valley__screenshot-5.jpg',
      '/static/images/games/stardew-valley__screenshot-6.jpg'
    ],

    type: GameType.GAME,
    name: 'Stardew Valley',
    slug: 'stardew-valley',
    externalId: '413150',
    releaseDate: 1456444800,
    genres: [GameGenre.INDIE, GameGenre.SIMULATION, GameGenre.RPG],
    description:
      'Р¤РµСЂРјРµСЂСЃРєРёР№ СЃРёРјСѓР»СЏС‚РѕСЂ СЃ РїСЂРѕРєР°С‡РєРѕР№, РѕС‚РЅРѕС€РµРЅРёСЏРјРё Рё РєСЂР°С„С‚РѕРј.',
    image: '/static/images/games/stardew-valley__header.jpg',
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
    screenshots: [
      '/static/images/games/hogwarts-legacy__screenshot-1.jpg',
      '/static/images/games/hogwarts-legacy__screenshot-2.jpg',
      '/static/images/games/hogwarts-legacy__screenshot-3.jpg',
      '/static/images/games/hogwarts-legacy__screenshot-4.jpg',
      '/static/images/games/hogwarts-legacy__screenshot-5.jpg'
    ],

    type: GameType.GAME,
    name: 'Hogwarts Legacy',
    slug: 'hogwarts-legacy',
    externalId: '990080',
    releaseDate: 1675987200,
    genres: [GameGenre.ACTION, GameGenre.RPG, GameGenre.ADVENTURE],
    description:
      'РћС‚РєСЂС‹С‚С‹Р№ РјРёСЂ РҐРѕРіРІР°СЂС‚СЃР° СЃ РјР°РіРёС‡РµСЃРєРёРјРё РґСѓСЌР»СЏРјРё Рё РєРІРµСЃС‚Р°РјРё.',
    image: '/static/images/games/hogwarts-legacy__header.jpg',
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
    screenshots: [
      '/static/images/games/lethal-company__screenshot-1.jpg',
      '/static/images/games/lethal-company__screenshot-2.jpg',
      '/static/images/games/lethal-company__screenshot-3.jpg',
      '/static/images/games/lethal-company__screenshot-4.jpg',
      '/static/images/games/lethal-company__screenshot-5.jpg',
      '/static/images/games/lethal-company__screenshot-6.jpg'
    ],

    type: GameType.GAME,
    name: 'Lethal Company',
    slug: 'lethal-company',
    externalId: '1966720',
    releaseDate: 1698019200,
    genres: [GameGenre.HORROR, GameGenre.INDIE],
    description:
      'РљРѕРѕРїРµСЂР°С‚РёРІРЅС‹Р№ С…РѕСЂСЂРѕСЂ РїСЂРѕ СЃР±РѕСЂ Р»СѓС‚Р° РЅР° РѕРїР°СЃРЅС‹С… Р»РѕРєР°С†РёСЏС….',
    image: '/static/images/games/lethal-company__header.jpg',
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
    screenshots: [
      '/static/images/games/the-finals__screenshot-1.jpg',
      '/static/images/games/the-finals__screenshot-2.jpg',
      '/static/images/games/the-finals__screenshot-3.jpg',
      '/static/images/games/the-finals__screenshot-4.jpg',
      '/static/images/games/the-finals__screenshot-5.jpg'
    ],

    type: GameType.GAME,
    name: 'The Finals',
    slug: 'the-finals',
    externalId: '2073850',
    releaseDate: 1701907200,
    genres: [GameGenre.SHOOTER, GameGenre.ACTION],
    description:
      'РЎРѕСЂРµРІРЅРѕРІР°С‚РµР»СЊРЅС‹Р№ С€СѓС‚РµСЂ СЃ СЂР°Р·СЂСѓС€Р°РµРјС‹Рј РѕРєСЂСѓР¶РµРЅРёРµРј.',
    image: '/static/images/games/the-finals__header.jpg',
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
    screenshots: [
      '/static/images/games/ea-sports-fc-25__screenshot-1.jpg',
      '/static/images/games/ea-sports-fc-25__screenshot-2.jpg',
      '/static/images/games/ea-sports-fc-25__screenshot-3.jpg',
      '/static/images/games/ea-sports-fc-25__screenshot-4.jpg',
      '/static/images/games/ea-sports-fc-25__screenshot-5.jpg',
      '/static/images/games/ea-sports-fc-25__screenshot-6.jpg'
    ],

    type: GameType.GAME,
    name: 'EA SPORTS FC 25',
    slug: 'ea-sports-fc-25',
    externalId: '2669320',
    releaseDate: 1727395200,
    genres: [GameGenre.SPORTS, GameGenre.SIMULATION],
    description:
      'Р¤СѓС‚Р±РѕР»СЊРЅС‹Р№ СЃРёРјСѓР»СЏС‚РѕСЂ СЃ Р°РєС‚СѓР°Р»СЊРЅС‹РјРё СЃРѕСЃС‚Р°РІР°РјРё Рё РѕРЅР»Р°Р№РЅ-СЂРµР¶РёРјР°РјРё.',
    image: '/static/images/games/ea-sports-fc-25__header.jpg',
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
    screenshots: [
      '/static/images/games/forza-horizon-5__screenshot-1.jpg',
      '/static/images/games/forza-horizon-5__screenshot-2.jpg',
      '/static/images/games/forza-horizon-5__screenshot-3.jpg',
      '/static/images/games/forza-horizon-5__screenshot-4.jpg',
      '/static/images/games/forza-horizon-5__screenshot-5.jpg',
      '/static/images/games/forza-horizon-5__screenshot-6.jpg'
    ],

    type: GameType.GAME,
    name: 'Forza Horizon 5',
    slug: 'forza-horizon-5',
    externalId: '1551360',
    releaseDate: 1636416000,
    genres: [GameGenre.RACING, GameGenre.SIMULATION],
    description: 'РђСЂРєР°РґРЅС‹Рµ РіРѕРЅРєРё РІ РѕС‚РєСЂС‹С‚РѕРј РјРёСЂРµ РњРµРєСЃРёРєРё.',
    image: '/static/images/games/forza-horizon-5__header.jpg',
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
    screenshots: [
      '/static/images/games/assassins-creed-shadows__screenshot-1.jpg',
      '/static/images/games/assassins-creed-shadows__screenshot-2.jpg',
      '/static/images/games/assassins-creed-shadows__screenshot-3.jpg',
      '/static/images/games/assassins-creed-shadows__screenshot-4.jpg',
      '/static/images/games/assassins-creed-shadows__screenshot-5.jpg',
      '/static/images/games/assassins-creed-shadows__screenshot-6.jpg'
    ],

    isPopular: false,
    type: GameType.GAME,
    name: 'AssassinвЂ™s Creed Shadows',
    slug: 'assassins-creed-shadows',
    externalId: '3159330',
    releaseDate: 1742428800,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.RPG],
    description:
      'РЎС‚РµР»СЃ-СЌРєС€РµРЅ РІ С„РµРѕРґР°Р»СЊРЅРѕР№ РЇРїРѕРЅРёРё СЃ РґРІСѓРјСЏ РїСЂРѕС‚Р°РіРѕРЅРёСЃС‚Р°РјРё.',
    image: '/static/images/games/assassins-creed-shadows__header.jpg',
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
    screenshots: [
      '/static/images/games/counter-strike-2__screenshot-1.jpg',
      '/static/images/games/counter-strike-2__screenshot-2.jpg',
      '/static/images/games/counter-strike-2__screenshot-3.jpg',
      '/static/images/games/counter-strike-2__screenshot-4.jpg',
      '/static/images/games/counter-strike-2__screenshot-5.jpg',
      '/static/images/games/counter-strike-2__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Counter-Strike 2',
    slug: 'counter-strike-2',
    externalId: '730',
    releaseDate: 1695772800,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description:
      'РљРѕРјР°РЅРґРЅС‹Р№ СЃРѕСЂРµРІРЅРѕРІР°С‚РµР»СЊРЅС‹Р№ С€СѓС‚РµСЂ СЃ РјР°С‚С‡РјРµР№РєРёРЅРіРѕРј, РєР°СЂС‚Р°РјРё Рё СЃРєРёРЅР°РјРё.',
    image: '/static/images/games/counter-strike-2__header.jpg',
    developer: 'Valve',
    publisher: 'Valve',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-750',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 970',
      storage: '85 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i5-8400',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1660',
      storage: '85 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 0,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 0,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 0,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/dota-2__screenshot-1.jpg',
      '/static/images/games/dota-2__screenshot-2.jpg',
      '/static/images/games/dota-2__screenshot-3.jpg',
      '/static/images/games/dota-2__screenshot-4.jpg',
      '/static/images/games/dota-2__screenshot-5.jpg',
      '/static/images/games/dota-2__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Dota 2',
    slug: 'dota-2',
    externalId: '570',
    releaseDate: 1373328000,
    genres: [GameGenre.STRATEGY, GameGenre.ACTION],
    description:
      'РљСѓР»СЊС‚РѕРІР°СЏ MOBA СЃ РіРµСЂРѕСЏРјРё, РєРѕРјР°РЅРґРЅС‹РјРё СЃСЂР°Р¶РµРЅРёСЏРјРё Рё РєРёР±РµСЂСЃРїРѕСЂС‚РёРІРЅРѕР№ СЃС†РµРЅРѕР№.',
    image: '/static/images/games/dota-2__header.jpg',
    developer: 'Valve',
    publisher: 'Valve',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Dual core 2.8 GHz',
      memory: '4 GB',
      graphics: 'NVIDIA GeForce 8600 GT',
      storage: '60 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i5-8400',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 1050 Ti',
      storage: '60 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 0,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 0,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 0,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/the-binding-of-isaac-rebirth__screenshot-1.jpg',
      '/static/images/games/the-binding-of-isaac-rebirth__screenshot-2.jpg',
      '/static/images/games/the-binding-of-isaac-rebirth__screenshot-3.jpg',
      '/static/images/games/the-binding-of-isaac-rebirth__screenshot-4.jpg',
      '/static/images/games/the-binding-of-isaac-rebirth__screenshot-5.jpg',
      '/static/images/games/the-binding-of-isaac-rebirth__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'The Binding of Isaac: Rebirth',
    slug: 'the-binding-of-isaac-rebirth',
    externalId: '250900',
    releaseDate: 1415059200,
    genres: [GameGenre.ACTION, GameGenre.INDIE],
    description:
      'РњСЂР°С‡РЅС‹Р№ roguelike СЃ РїСЂРѕС†РµРґСѓСЂРЅС‹РјРё РєРѕРјРЅР°С‚Р°РјРё, РїСЂРµРґРјРµС‚Р°РјРё Рё Р±РµР·СѓРјРЅС‹РјРё Р±РёР»РґР°РјРё.',
    image: '/static/images/games/the-binding-of-isaac-rebirth__header.jpg',
    developer: 'Nicalis, Inc.',
    publisher: 'Nicalis, Inc.',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 7',
      processor: 'Intel Core 2 Duo',
      memory: '2 GB',
      graphics: 'Integrated Graphics',
      storage: '1 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11',
      processor: 'Intel Core i3',
      memory: '4 GB',
      graphics: 'Dedicated GPU',
      storage: '1 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 599,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 499,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 459,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/rust__screenshot-1.jpg',
      '/static/images/games/rust__screenshot-2.jpg',
      '/static/images/games/rust__screenshot-3.jpg',
      '/static/images/games/rust__screenshot-4.jpg',
      '/static/images/games/rust__screenshot-5.jpg',
      '/static/images/games/rust__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Rust',
    slug: 'rust',
    externalId: '252490',
    releaseDate: 1518048000,
    genres: [GameGenre.SURVIVAL, GameGenre.ACTION],
    description:
      'РћРЅР»Р°Р№РЅ-РІС‹Р¶РёРІР°РЅРёРµ СЃ РєСЂР°С„С‚РѕРј, Р±Р°Р·Р°РјРё, СЂРµР№РґР°РјРё Рё РїРѕСЃС‚РѕСЏРЅРЅРѕР№ Р±РѕСЂСЊР±РѕР№ Р·Р° СЂРµСЃСѓСЂСЃС‹.',
    image: '/static/images/games/rust__header.jpg',
    developer: 'Facepunch Studios',
    publisher: 'Facepunch Studios',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-3770',
      memory: '10 GB',
      graphics: 'NVIDIA GeForce GTX 670',
      storage: '35 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i7-4790K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 980',
      storage: '35 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1499,
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
        edition: 'Standard',
        price: 1199,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/factorio__screenshot-1.jpg',
      '/static/images/games/factorio__screenshot-2.jpg',
      '/static/images/games/factorio__screenshot-3.jpg',
      '/static/images/games/factorio__screenshot-4.jpg',
      '/static/images/games/factorio__screenshot-5.jpg',
      '/static/images/games/factorio__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Factorio',
    slug: 'factorio',
    externalId: '427520',
    releaseDate: 1597363200,
    genres: [GameGenre.STRATEGY, GameGenre.SIMULATION],
    description:
      'РРЅР¶РµРЅРµСЂРЅР°СЏ РїРµСЃРѕС‡РЅРёС†Р° РїСЂРѕ Р°РІС‚РѕРјР°С‚РёР·Р°С†РёСЋ Р·Р°РІРѕРґРѕРІ, Р»РѕРіРёСЃС‚РёРєСѓ Рё Р±РµСЃРєРѕРЅРµС‡РЅСѓСЋ РѕРїС‚РёРјРёР·Р°С†РёСЋ.',
    image: '/static/images/games/factorio__header.jpg',
    developer: 'Wube Software LTD.',
    publisher: 'Wube Software LTD.',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Dual core 3 GHz',
      memory: '4 GB',
      graphics: 'Integrated Graphics',
      storage: '3 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Quad core 3 GHz',
      memory: '8 GB',
      graphics: 'Dedicated GPU',
      storage: '3 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1999,
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
        edition: 'Standard',
        price: 1699,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/hollow-knight__screenshot-1.jpg',
      '/static/images/games/hollow-knight__screenshot-2.jpg',
      '/static/images/games/hollow-knight__screenshot-3.jpg',
      '/static/images/games/hollow-knight__screenshot-4.jpg',
      '/static/images/games/hollow-knight__screenshot-5.jpg',
      '/static/images/games/hollow-knight__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Hollow Knight',
    slug: 'hollow-knight',
    externalId: '367520',
    releaseDate: 1487894400,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.INDIE],
    description:
      'РђС‚РјРѕСЃС„РµСЂРЅР°СЏ РјРµС‚СЂРѕРёРґРІР°РЅРёСЏ СЃ РёСЃСЃР»РµРґРѕРІР°РЅРёРµРј РїРѕРґР·РµРјРЅРѕРіРѕ РєРѕСЂРѕР»РµРІСЃС‚РІР° Рё СЃР»РѕР¶РЅС‹РјРё Р±РѕСЃСЃР°РјРё.',
    image: '/static/images/games/hollow-knight__header.jpg',
    developer: 'Team Cherry',
    publisher: 'Team Cherry',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 7',
      processor: 'Intel Core 2 Duo E5200',
      memory: '4 GB',
      graphics: 'NVIDIA GeForce 9800 GTX',
      storage: '9 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11',
      processor: 'Intel Core i5',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 560',
      storage: '9 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 699,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 599,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 549,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/dead-cells__screenshot-1.jpg',
      '/static/images/games/dead-cells__screenshot-2.jpg',
      '/static/images/games/dead-cells__screenshot-3.jpg',
      '/static/images/games/dead-cells__screenshot-4.jpg',
      '/static/images/games/dead-cells__screenshot-5.jpg',
      '/static/images/games/dead-cells__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Dead Cells',
    slug: 'dead-cells',
    externalId: '588650',
    releaseDate: 1533600000,
    genres: [GameGenre.ACTION, GameGenre.INDIE],
    description:
      'Roguelite-РјРµС‚СЂРѕРёРґРІР°РЅРёСЏ СЃ Р±С‹СЃС‚СЂС‹РјРё Р±РѕСЏРјРё, РѕСЂСѓР¶РёРµРј Рё РїРѕСЃС‚РѕСЏРЅРЅРѕР№ РїСЂРѕРєР°С‡РєРѕР№ РЅР°РІС‹РєР°.',
    image: '/static/images/games/dead-cells__header.jpg',
    developer: 'Motion Twin',
    publisher: 'Motion Twin',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 7',
      processor: 'Intel i5',
      memory: '2 GB',
      graphics: 'NVIDIA 450 GTS',
      storage: '1 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11',
      processor: 'Intel i5',
      memory: '4 GB',
      graphics: 'NVIDIA GTX 460',
      storage: '1 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 899,
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
        edition: 'Standard',
        price: 749,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/among-us__screenshot-1.jpg',
      '/static/images/games/among-us__screenshot-2.jpg',
      '/static/images/games/among-us__screenshot-3.jpg',
      '/static/images/games/among-us__screenshot-4.jpg',
      '/static/images/games/among-us__screenshot-5.jpg',
      '/static/images/games/among-us__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Among Us',
    slug: 'among-us',
    externalId: '945360',
    releaseDate: 1542326400,
    genres: [GameGenre.INDIE],
    description:
      'РЎРѕС†РёР°Р»СЊРЅР°СЏ РґРµРґСѓРєС†РёСЏ РїСЂРѕ СЌРєРёРїР°Р¶, РїСЂРµРґР°С‚РµР»РµР№ Рё РїРѕРґРѕР·СЂРёС‚РµР»СЊРЅС‹Рµ Р°РІР°СЂРёРё РЅР° РєРѕСЂР°Р±Р»Рµ.',
    image: '/static/images/games/among-us__header.jpg',
    developer: 'Innersloth',
    publisher: 'Innersloth',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10',
      processor: 'Intel Pentium 4',
      memory: '1 GB',
      graphics: 'Integrated Graphics',
      storage: '1 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11',
      processor: 'Intel Core i3',
      memory: '2 GB',
      graphics: 'Integrated Graphics',
      storage: '1 GB'
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
        price: 129,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/valheim__screenshot-1.jpg',
      '/static/images/games/valheim__screenshot-2.jpg',
      '/static/images/games/valheim__screenshot-3.jpg',
      '/static/images/games/valheim__screenshot-4.jpg',
      '/static/images/games/valheim__screenshot-5.jpg',
      '/static/images/games/valheim__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Valheim',
    slug: 'valheim',
    externalId: '892970',
    releaseDate: 1612224000,
    genres: [GameGenre.SURVIVAL, GameGenre.ADVENTURE],
    description:
      'РљРѕРѕРїРµСЂР°С‚РёРІРЅРѕРµ РІС‹Р¶РёРІР°РЅРёРµ РІ РјРёСЂРµ РІРёРєРёРЅРіРѕРІ СЃ РєСЂР°С„С‚РѕРј, СЃС‚СЂРѕРёС‚РµР»СЊСЃС‚РІРѕРј Рё Р±РѕСЃСЃР°РјРё.',
    image: '/static/images/games/valheim__header.jpg',
    developer: 'Iron Gate AB',
    publisher: 'Coffee Stain Publishing',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: '2.6 GHz Dual Core',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 950',
      storage: '1 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i5 3 GHz',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1060',
      storage: '1 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 899,
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
        edition: 'Standard',
        price: 749,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/project-zomboid__screenshot-1.jpg',
      '/static/images/games/project-zomboid__screenshot-2.jpg',
      '/static/images/games/project-zomboid__screenshot-3.jpg',
      '/static/images/games/project-zomboid__screenshot-4.jpg',
      '/static/images/games/project-zomboid__screenshot-5.jpg',
      '/static/images/games/project-zomboid__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Project Zomboid',
    slug: 'project-zomboid',
    externalId: '108600',
    releaseDate: 1383868800,
    genres: [GameGenre.SURVIVAL, GameGenre.SIMULATION],
    description:
      'РҐР°СЂРґРєРѕСЂРЅР°СЏ РїРµСЃРѕС‡РЅРёС†Р° РїСЂРѕ РІС‹Р¶РёРІР°РЅРёРµ РІ Р·РѕРјР±Рё-Р°РїРѕРєР°Р»РёРїСЃРёСЃРµ СЃ РіР»СѓР±РѕРєРѕР№ СЃРёРјСѓР»СЏС†РёРµР№.',
    image: '/static/images/games/project-zomboid__header.jpg',
    developer: 'The Indie Stone',
    publisher: 'The Indie Stone',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel 2.77 GHz Quad-core',
      memory: '8 GB',
      graphics: 'Dedicated GPU',
      storage: '5 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i5',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 970',
      storage: '5 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 799,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 699,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 649,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/dont-starve-together__screenshot-1.jpg',
      '/static/images/games/dont-starve-together__screenshot-2.jpg',
      '/static/images/games/dont-starve-together__screenshot-3.jpg',
      '/static/images/games/dont-starve-together__screenshot-4.jpg',
      '/static/images/games/dont-starve-together__screenshot-5.jpg',
      '/static/images/games/dont-starve-together__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: "Don't Starve Together",
    slug: 'dont-starve-together',
    externalId: '322330',
    releaseDate: 1461196800,
    genres: [GameGenre.SURVIVAL, GameGenre.INDIE],
    description:
      'РљРѕРѕРїРµСЂР°С‚РёРІРЅРѕРµ РІС‹Р¶РёРІР°РЅРёРµ РІ СЃС‚СЂР°РЅРЅРѕРј РјРёСЂРµ СЃ РєСЂР°С„С‚РѕРј, РіРѕР»РѕРґРѕРј Рё РїРѕСЃС‚РѕСЏРЅРЅРѕР№ РѕРїР°СЃРЅРѕСЃС‚СЊСЋ.',
    image: '/static/images/games/dont-starve-together__header.jpg',
    developer: 'Klei Entertainment',
    publisher: 'Klei Entertainment',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 7',
      processor: '1.7 GHz Dual Core',
      memory: '1 GB',
      graphics: 'Radeon HD5450',
      storage: '3 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11',
      processor: 'Intel Core i3',
      memory: '4 GB',
      graphics: 'Dedicated GPU',
      storage: '3 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 499,
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
        price: 349,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/phasmophobia__screenshot-1.jpg',
      '/static/images/games/phasmophobia__screenshot-2.jpg',
      '/static/images/games/phasmophobia__screenshot-3.jpg',
      '/static/images/games/phasmophobia__screenshot-4.jpg',
      '/static/images/games/phasmophobia__screenshot-5.jpg',
      '/static/images/games/phasmophobia__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Phasmophobia',
    slug: 'phasmophobia',
    externalId: '739630',
    releaseDate: 1600387200,
    genres: [GameGenre.HORROR, GameGenre.INDIE],
    description:
      'РљРѕРѕРїРµСЂР°С‚РёРІРЅС‹Р№ С…РѕСЂСЂРѕСЂ РїСЂРѕ РѕС…РѕС‚Сѓ РЅР° РїСЂРёР·СЂР°РєРѕРІ СЃ СѓР»РёРєР°РјРё, РіРѕР»РѕСЃРѕРј Рё РЅР°РїСЂСЏР¶РµРЅРёРµРј.',
    image: '/static/images/games/phasmophobia__header.jpg',
    developer: 'Kinetic Games',
    publisher: 'Kinetic Games',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-4590',
      memory: '8 GB',
      graphics: 'NVIDIA GTX 970',
      storage: '21 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i5-10600',
      memory: '16 GB',
      graphics: 'NVIDIA RTX 2060',
      storage: '21 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 699,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 599,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 549,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/hades__screenshot-1.jpg',
      '/static/images/games/hades__screenshot-2.jpg',
      '/static/images/games/hades__screenshot-3.jpg',
      '/static/images/games/hades__screenshot-4.jpg',
      '/static/images/games/hades__screenshot-5.jpg',
      '/static/images/games/hades__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Hades',
    slug: 'hades',
    externalId: '1145360',
    releaseDate: 1600300800,
    genres: [GameGenre.ACTION, GameGenre.INDIE, GameGenre.RPG],
    description:
      'Р”РёРЅР°РјРёС‡РЅС‹Р№ roguelike РїСЂРѕ РїРѕР±РµРі РёР· РїРѕРґР·РµРјРЅРѕРіРѕ С†Р°СЂСЃС‚РІР° СЃ СЃРёР»СЊРЅС‹Рј СЃСЋР¶РµС‚РѕРј Рё Р±РѕРµРІРѕР№ СЃРёСЃС‚РµРјРѕР№.',
    image: '/static/images/games/hades__header.jpg',
    developer: 'Supergiant Games',
    publisher: 'Supergiant Games',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 7',
      processor: 'Dual Core 2.4 GHz',
      memory: '4 GB',
      graphics: 'Intel HD 5000',
      storage: '15 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11',
      processor: 'Dual Core 3.0 GHz',
      memory: '8 GB',
      graphics: 'NVIDIA GTX 750',
      storage: '15 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 999,
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
        edition: 'Standard',
        price: 849,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/slay-the-spire__screenshot-1.jpg',
      '/static/images/games/slay-the-spire__screenshot-2.jpg',
      '/static/images/games/slay-the-spire__screenshot-3.jpg',
      '/static/images/games/slay-the-spire__screenshot-4.jpg',
      '/static/images/games/slay-the-spire__screenshot-5.jpg',
      '/static/images/games/slay-the-spire__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Slay the Spire',
    slug: 'slay-the-spire',
    externalId: '646570',
    releaseDate: 1548201600,
    genres: [GameGenre.STRATEGY, GameGenre.INDIE],
    description:
      'РљР°СЂС‚РѕС‡РЅС‹Р№ roguelike СЃ РїРѕСЃС‚СЂРѕРµРЅРёРµРј РєРѕР»РѕРґС‹, РјР°СЂС€СЂСѓС‚Р°РјРё Рё РїРѕСЃС‚РѕСЏРЅРЅС‹Рј РїРѕРёСЃРєРѕРј СЃРёРЅРµСЂРіРёР№.',
    image: '/static/images/games/slay-the-spire__header.jpg',
    developer: 'Mega Crit',
    publisher: 'Mega Crit',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows XP/Vista/7/8/10',
      processor: '2.0 GHz',
      memory: '1 GB',
      graphics: '1 GB Video Memory',
      storage: '1 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11',
      processor: '2.0 GHz',
      memory: '2 GB',
      graphics: '1 GB Video Memory',
      storage: '1 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 799,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 699,
        region: Region.RU
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 649,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/portal-2__screenshot-1.jpg',
      '/static/images/games/portal-2__screenshot-2.jpg',
      '/static/images/games/portal-2__screenshot-3.jpg',
      '/static/images/games/portal-2__screenshot-4.jpg',
      '/static/images/games/portal-2__screenshot-5.jpg',
      '/static/images/games/portal-2__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Portal 2',
    slug: 'portal-2',
    externalId: '620',
    releaseDate: 1303084800,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description:
      'Р“РѕР»РѕРІРѕР»РѕРјРєР° РѕС‚ Valve РїСЂРѕ РїРѕСЂС‚Р°Р»С‹, С„РёР·РёРєСѓ, РєРѕРѕРїРµСЂР°С‚РёРІ Рё СЃР°СЂРєР°СЃС‚РёС‡РЅС‹Р№ РёСЃРєСѓСЃСЃС‚РІРµРЅРЅС‹Р№ РёРЅС‚РµР»Р»РµРєС‚.',
    image: '/static/images/games/portal-2__header.jpg',
    developer: 'Valve',
    publisher: 'Valve',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 7',
      processor: 'Dual Core 2.0 GHz',
      memory: '2 GB',
      graphics: 'DirectX 9 compatible',
      storage: '8 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11',
      processor: 'Intel Core i3',
      memory: '4 GB',
      graphics: 'NVIDIA GeForce GTX 650',
      storage: '8 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 399,
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
        edition: 'Standard',
        price: 249,
        region: Region.KZ
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/diablo-iv__screenshot-1.jpg',
      '/static/images/games/diablo-iv__screenshot-2.jpg',
      '/static/images/games/diablo-iv__screenshot-3.jpg',
      '/static/images/games/diablo-iv__screenshot-4.jpg',
      '/static/images/games/diablo-iv__screenshot-5.jpg',
      '/static/images/games/diablo-iv__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Diablo IV',
    slug: 'diablo-iv',
    externalId: '2344520',
    releaseDate: 1686009600,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description:
      'РњСЂР°С‡РЅР°СЏ action-RPG РїСЂРѕ РЎР°РЅРєС‚СѓР°СЂРёР№, РґРµРјРѕРЅРѕРІ, Р»СѓС‚ Рё СЃРµР·РѕРЅРЅС‹Рµ Р°РєС‚РёРІРЅРѕСЃС‚Рё.',
    image: '/static/images/games/diablo-iv__header.jpg',
    developer: 'Blizzard Entertainment',
    publisher: 'Blizzard Entertainment',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-2500K',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 660',
      storage: '90 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-4670K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 970',
      storage: '90 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 3634,
        oldPrice: 3907,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 4299,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Standard', price: 3499, region: Region.RU }
    ]
  },
  {
    screenshots: [
      '/static/images/games/gothic-1-remake__screenshot-1.jpg',
      '/static/images/games/gothic-1-remake__screenshot-2.jpg',
      '/static/images/games/gothic-1-remake__screenshot-3.jpg',
      '/static/images/games/gothic-1-remake__screenshot-4.jpg',
      '/static/images/games/gothic-1-remake__screenshot-5.jpg',
      '/static/images/games/gothic-1-remake__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Gothic 1 Remake',
    slug: 'gothic-1-remake',
    externalId: '1297900',
    releaseDate: 1780617600,
    genres: [GameGenre.RPG, GameGenre.ADVENTURE],
    description:
      'Р’РѕР·РІСЂР°С‰РµРЅРёРµ РІ Р”РѕР»РёРЅСѓ Р СѓРґРЅРёРєРѕРІ РІ СЃРѕРІСЂРµРјРµРЅРЅРѕРј СЂРµРјРµР№РєРµ РєР»Р°СЃСЃРёС‡РµСЃРєРѕР№ RPG.',
    image: '/static/images/games/gothic-1-remake__header.jpg',
    developer: 'Alkimia Interactive',
    publisher: 'THQ Nordic',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-8400',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1060',
      storage: '50 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i7-10700K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 2070',
      storage: '50 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2959,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3999,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Standard', price: 2799, region: Region.RU }
    ]
  },
  {
    screenshots: [
      '/static/images/games/days-gone__screenshot-1.jpg',
      '/static/images/games/days-gone__screenshot-2.jpg',
      '/static/images/games/days-gone__screenshot-3.jpg',
      '/static/images/games/days-gone__screenshot-4.jpg',
      '/static/images/games/days-gone__screenshot-5.jpg',
      '/static/images/games/days-gone__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Days Gone',
    slug: 'days-gone',
    externalId: '1259420',
    releaseDate: 1621296000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.SURVIVAL],
    description:
      'РџРѕСЃС‚Р°РїРѕРєР°Р»РёРїС‚РёС‡РµСЃРєРёР№ open-world СЌРєС€РµРЅ РїСЂРѕ Р±Р°Р№РєРµСЂР° Рё РІС‹Р¶РёРІР°РЅРёРµ СЃСЂРµРґРё С„СЂРёРєРµСЂРѕРІ.',
    image: '/static/images/games/days-gone__header.jpg',
    developer: 'Bend Studio',
    publisher: 'PlayStation Publishing LLC',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-2500K',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 780',
      storage: '70 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-4770K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1060',
      storage: '70 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1550,
        oldPrice: 2540,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 2199,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Standard', price: 1499, region: Region.RU }
    ]
  },
  {
    screenshots: [
      '/static/images/games/cult-of-the-lamb__screenshot-1.jpg',
      '/static/images/games/cult-of-the-lamb__screenshot-2.jpg',
      '/static/images/games/cult-of-the-lamb__screenshot-3.jpg',
      '/static/images/games/cult-of-the-lamb__screenshot-4.jpg',
      '/static/images/games/cult-of-the-lamb__screenshot-5.jpg',
      '/static/images/games/cult-of-the-lamb__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Cult of the Lamb',
    slug: 'cult-of-the-lamb',
    externalId: '1313140',
    releaseDate: 1660176000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.INDIE, GameGenre.STRATEGY],
    description:
      'РњРёР»С‹Р№ Рё РјСЂР°С‡РЅС‹Р№ roguelite РїСЂРѕ РєСѓР»СЊС‚, РїРѕСЃР»РµРґРѕРІР°С‚РµР»РµР№ Рё РїРѕС…РѕРґС‹ Р·Р° СЂРµСЃСѓСЂСЃР°РјРё.',
    image: '/static/images/games/cult-of-the-lamb__header.jpg',
    developer: 'Massive Monster',
    publisher: 'Devolver Digital',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i3-3240',
      memory: '4 GB',
      graphics: 'NVIDIA GeForce GTX 560 Ti',
      storage: '4 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-3470',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 1050',
      storage: '4 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 842,
        oldPrice: 2405,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 1299,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Standard', price: 799, region: Region.RU }
    ]
  },
  {
    screenshots: [
      '/static/images/games/skyrim-special-edition__screenshot-1.jpg',
      '/static/images/games/skyrim-special-edition__screenshot-2.jpg',
      '/static/images/games/skyrim-special-edition__screenshot-3.jpg',
      '/static/images/games/skyrim-special-edition__screenshot-4.jpg',
      '/static/images/games/skyrim-special-edition__screenshot-5.jpg',
      '/static/images/games/skyrim-special-edition__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'The Elder Scrolls V: Skyrim Special Edition',
    slug: 'skyrim-special-edition',
    externalId: '489830',
    releaseDate: 1477612800,
    genres: [GameGenre.RPG, GameGenre.ADVENTURE],
    description:
      'РљР»Р°СЃСЃРёС‡РµСЃРєР°СЏ RPG РІ РѕС‚РєСЂС‹С‚РѕРј РјРёСЂРµ СЃ РґСЂР°РєРѕРЅР°РјРё, С„СЂР°РєС†РёСЏРјРё Рё СЃРІРѕР±РѕРґРѕР№ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ.',
    image: '/static/images/games/skyrim-special-edition__header.jpg',
    developer: 'Bethesda Game Studios',
    publisher: 'Bethesda Softworks',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 7/8.1/10 64-bit',
      processor: 'Intel Core i5-750',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 470',
      storage: '12 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i5-2400',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 780',
      storage: '12 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Special Edition',
        price: 629,
        oldPrice: 1103,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Anniversary Edition',
        price: 1499,
        region: Region.EUROPE
      },
      {
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Special Edition',
        price: 599,
        region: Region.RU
      }
    ]
  },
  {
    screenshots: [
      '/static/images/games/resident-evil-requiem__screenshot-1.jpg',
      '/static/images/games/resident-evil-requiem__screenshot-2.jpg',
      '/static/images/games/resident-evil-requiem__screenshot-3.jpg',
      '/static/images/games/resident-evil-requiem__screenshot-4.jpg',
      '/static/images/games/resident-evil-requiem__screenshot-5.jpg',
      '/static/images/games/resident-evil-requiem__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Resident Evil Requiem',
    slug: 'resident-evil-requiem',
    externalId: '3764200',
    releaseDate: 1771545600,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.HORROR],
    description:
      'РќРѕРІР°СЏ С‡Р°СЃС‚СЊ Resident Evil СЃ РјСЂР°С‡РЅС‹Рј survival horror Рё РєРёРЅРµРјР°С‚РѕРіСЂР°С„РёС‡РЅС‹Рј РЅР°РїСЂСЏР¶РµРЅРёРµРј.',
    image: '/static/images/games/resident-evil-requiem__header.jpg',
    developer: 'CAPCOM Co., Ltd.',
    publisher: 'CAPCOM Co., Ltd.',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-8700',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce GTX 1070',
      storage: '70 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i7-10700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2070',
      storage: '70 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 3132,
        oldPrice: 4067,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 4299,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Standard', price: 2999, region: Region.RU }
    ]
  },
  {
    screenshots: [
      '/static/images/games/arc-raiders__screenshot-1.jpg',
      '/static/images/games/arc-raiders__screenshot-2.jpg',
      '/static/images/games/arc-raiders__screenshot-3.jpg',
      '/static/images/games/arc-raiders__screenshot-4.jpg',
      '/static/images/games/arc-raiders__screenshot-5.jpg',
      '/static/images/games/arc-raiders__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'ARC Raiders',
    slug: 'arc-raiders',
    externalId: '1808500',
    releaseDate: 1761782400,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER, GameGenre.ADVENTURE],
    description:
      'РњСѓР»СЊС‚РёРїР»РµРµСЂРЅС‹Р№ extraction adventure РїСЂРѕ РІС‹Р»Р°Р·РєРё РЅР° РѕРїР°СЃРЅСѓСЋ РїРѕРІРµСЂС…РЅРѕСЃС‚СЊ Рё СЃСЂР°Р¶РµРЅРёСЏ СЃ ARC.',
    image: '/static/images/games/arc-raiders__header.jpg',
    developer: 'Embark Studios',
    publisher: 'Embark Studios',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-6600K',
      memory: '12 GB',
      graphics: 'NVIDIA GeForce GTX 970',
      storage: '50 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i7-9700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2070',
      storage: '50 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2220,
        oldPrice: 3699,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3299,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Standard', price: 1999, region: Region.RU }
    ]
  },
  {
    screenshots: [
      '/static/images/games/max-payne-3__screenshot-1.jpg',
      '/static/images/games/max-payne-3__screenshot-2.jpg',
      '/static/images/games/max-payne-3__screenshot-3.jpg',
      '/static/images/games/max-payne-3__screenshot-4.jpg',
      '/static/images/games/max-payne-3__screenshot-5.jpg',
      '/static/images/games/max-payne-3__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Max Payne',
    slug: 'max-payne',
    externalId: '12140',
    releaseDate: 996624000,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description:
      'РљСѓР»СЊС‚РѕРІС‹Р№ РЅСѓР°СЂРЅС‹Р№ С€СѓС‚РµСЂ СЃ bullet time, РјСЂР°С‡РЅРѕР№ РёСЃС‚РѕСЂРёРµР№ Рё Р°С‚РјРѕСЃС„РµСЂРѕР№ РќСЊСЋ-Р™РѕСЂРєР°.',
    image: '/static/images/games/max-payne-3__header.jpg',
    developer: 'Remedy Entertainment',
    publisher: 'Rockstar Games',
    isPopular: false,
    minimumSystemRequirements: {
      oc: 'Windows 7/10',
      processor: 'Intel Pentium III',
      memory: '512 MB',
      graphics: 'DirectX-compatible GPU',
      storage: '1 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11',
      processor: 'Intel Core 2 Duo',
      memory: '2 GB',
      graphics: 'NVIDIA GeForce 8600',
      storage: '1 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 288,
        oldPrice: 862,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Bundle',
        price: 499,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Classic', price: 399, region: Region.RU }
    ]
  },
  {
    screenshots: [
      '/static/images/games/half-life-alyx__screenshot-1.jpg',
      '/static/images/games/half-life-alyx__screenshot-2.jpg',
      '/static/images/games/half-life-alyx__screenshot-3.jpg',
      '/static/images/games/half-life-alyx__screenshot-4.jpg',
      '/static/images/games/half-life-alyx__screenshot-5.jpg',
      '/static/images/games/half-life-alyx__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Half-Life: Alyx',
    slug: 'half-life-alyx',
    externalId: '546560',
    releaseDate: 1584921600,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER, GameGenre.ADVENTURE],
    description:
      'VR-РІРѕР·РІСЂР°С‰РµРЅРёРµ Half-Life СЃ С„РёР·РёРєРѕР№, РёСЃСЃР»РµРґРѕРІР°РЅРёРµРј Рё Р±РѕСЂСЊР±РѕР№ РїСЂРѕС‚РёРІ РђР»СЊСЏРЅСЃР°.',
    image: '/static/images/games/half-life-alyx__header.jpg',
    developer: 'Valve',
    publisher: 'Valve',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-7500',
      memory: '12 GB',
      graphics: 'NVIDIA GeForce GTX 1060',
      storage: '70 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-9700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2070',
      storage: '70 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2413,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'VR Bundle',
        price: 3499,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Standard', price: 2299, region: Region.RU }
    ]
  },
  {
    screenshots: [
      '/static/images/games/witchfire__screenshot-1.jpg',
      '/static/images/games/witchfire__screenshot-2.jpg',
      '/static/images/games/witchfire__screenshot-3.jpg',
      '/static/images/games/witchfire__screenshot-4.jpg',
      '/static/images/games/witchfire__screenshot-5.jpg',
      '/static/images/games/witchfire__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'Witchfire',
    slug: 'witchfire',
    externalId: '3156770',
    releaseDate: 1727049600,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER, GameGenre.RPG],
    description:
      'РўС‘РјРЅС‹Р№ С„СЌРЅС‚РµР·Рё-С€СѓС‚РµСЂ РѕС‚ РїРµСЂРІРѕРіРѕ Р»РёС†Р° СЃ РѕС…РѕС‚РѕР№ РЅР° РІРµРґСЊРј, РјР°РіРёРµР№ Рё РѕРїР°СЃРЅС‹РјРё РІС‹Р»Р°Р·РєР°РјРё.',
    image: '/static/images/games/witchfire__header.jpg',
    developer: 'The Astronauts',
    publisher: 'The Astronauts',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i5-6600K',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 970',
      storage: '40 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i7-9700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2070',
      storage: '40 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1827,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 2499,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Standard', price: 1699, region: Region.RU }
    ]
  },
  {
    screenshots: [
      '/static/images/games/dark-souls-3__screenshot-1.jpg',
      '/static/images/games/dark-souls-3__screenshot-2.jpg',
      '/static/images/games/dark-souls-3__screenshot-3.jpg',
      '/static/images/games/dark-souls-3__screenshot-4.jpg',
      '/static/images/games/dark-souls-3__screenshot-5.jpg',
      '/static/images/games/dark-souls-3__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'DARK SOULS III',
    slug: 'dark-souls-3',
    externalId: '374320',
    releaseDate: 1460332800,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description:
      'РњСЂР°С‡РЅС‹Р№ soulslike СЃ РЅР°РїСЂСЏР¶С‘РЅРЅС‹РјРё Р±РѕСЏРјРё, Р±РѕСЃСЃР°РјРё Рё РёСЃСЃР»РµРґРѕРІР°РЅРёРµРј РіРёР±РЅСѓС‰РµРіРѕ РјРёСЂР°.',
    image: '/static/images/games/dark-souls-3__header.jpg',
    developer: 'FromSoftware, Inc.',
    publisher: 'Bandai Namco Entertainment',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 7/8.1/10 64-bit',
      processor: 'Intel Core i3-2100',
      memory: '4 GB',
      graphics: 'NVIDIA GeForce GTX 750 Ti',
      storage: '25 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-3770',
      memory: '8 GB',
      graphics: 'NVIDIA GeForce GTX 970',
      storage: '25 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2477,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3499,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Standard', price: 2299, region: Region.RU }
    ]
  },
  {
    screenshots: [
      '/static/images/games/doom-the-dark-ages__screenshot-1.jpg',
      '/static/images/games/doom-the-dark-ages__screenshot-2.jpg',
      '/static/images/games/doom-the-dark-ages__screenshot-3.jpg',
      '/static/images/games/doom-the-dark-ages__screenshot-4.jpg',
      '/static/images/games/doom-the-dark-ages__screenshot-5.jpg',
      '/static/images/games/doom-the-dark-ages__screenshot-6.jpg'
    ],
    type: GameType.GAME,
    name: 'DOOM: The Dark Ages',
    slug: 'doom-the-dark-ages',
    externalId: '3017860',
    releaseDate: 1747267200,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description:
      'РЎСЂРµРґРЅРµРІРµРєРѕРІС‹Р№ РїСЂРёРєРІРµР» DOOM СЃ С‚СЏР¶С‘Р»С‹Рј РѕСЂСѓР¶РёРµРј, РґРµРјРѕРЅР°РјРё Рё РЅРѕРІС‹Рј РѕР±СЂР°Р·РѕРј РџР°Р»Р°С‡Р° Р РѕРєР°.',
    image: '/static/images/games/doom-the-dark-ages__header.jpg',
    developer: 'id Software',
    publisher: 'Bethesda Softworks',
    isPopular: true,
    minimumSystemRequirements: {
      oc: 'Windows 10 64-bit',
      processor: 'Intel Core i7-10700K',
      memory: '16 GB',
      graphics: 'NVIDIA GeForce RTX 2060',
      storage: '100 GB'
    },
    recommendedSystemRequirements: {
      oc: 'Windows 11 64-bit',
      processor: 'Intel Core i7-12700K',
      memory: '32 GB',
      graphics: 'NVIDIA GeForce RTX 3080',
      storage: '100 GB'
    },
    priceVariants: [
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1758,
        oldPrice: 2197,
        region: Region.ALL_WORLD
      },
      {
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 2999,
        region: Region.EUROPE
      },
      { deliveryType: DeliveryType.STEAM_GIFT, edition: 'Standard', price: 1699, region: Region.RU }
    ]
  }
];
