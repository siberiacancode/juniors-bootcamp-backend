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
        id: 'bf2042-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2688,
        oldPrice: 2999,
        region: Region.ALL_WORLD
      },
      {
        id: 'bf2042-2',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3299,
        oldPrice: 3499,
        region: Region.EUROPE
      },
      {
        id: 'bf2042-3',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Standard',
        price: 2799,
        region: Region.ALL_WORLD
      },
      {
        id: 'bf2042-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2499,
        region: Region.RU
      },
      {
        id: 'bf2042-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2399,
        region: Region.KZ
      },
      {
        id: 'bf2042-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2899,
        region: Region.BY
      }
    ],
    rating: 57.78
  },
  {
    name: 'Titanfall 2',
    slug: 'titanfall-2',
    externalId: '1237970',
    releaseDate: 1477612800,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Динамичный sci-fi шутер с паркуром и боями титанов.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'tf2-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 499,
        region: Region.ALL_WORLD
      },
      {
        id: 'tf2-2',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 899,
        oldPrice: 1199,
        region: Region.EUROPE
      },
      {
        id: 'tf2-3',
        deliveryType: DeliveryType.EPIC_KEY,
        edition: 'Standard',
        price: 699,
        region: Region.ALL_WORLD
      },
      {
        id: 'tf2-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 299,
        region: Region.RU
      },
      {
        id: 'tf2-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 499,
        region: Region.KZ
      },
      {
        id: 'tf2-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 1299,
        region: Region.BY
      }
    ],
    rating: 94.44
  },
  {
    name: 'Sea of Thieves',
    slug: 'sea-of-thieves',
    externalId: '1172620',
    releaseDate: 1521504000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description: 'Кооперативное пиратское приключение в открытом мире.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'sot-1',
        deliveryType: DeliveryType.EPIC_KEY,
        edition: 'Standard',
        price: 1499,
        region: Region.ALL_WORLD
      },
      {
        id: 'sot-2',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Deluxe',
        price: 1999,
        oldPrice: 2499,
        region: Region.EUROPE
      },
      {
        id: 'sot-3',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Special',
        price: 1799,
        region: Region.ALL_WORLD
      },
      {
        id: 'sot-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 899,
        region: Region.RU
      },
      {
        id: 'sot-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 1099,
        region: Region.KZ
      },
      {
        id: 'sot-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Anniversary',
        price: 1499,
        region: Region.BY
      }
    ],
    rating: 90.25
  },
  {
    name: 'Mortal Kombat 1',
    slug: 'mortal-kombat-1',
    externalId: '1971870',
    releaseDate: 1695081600,
    genres: [GameGenre.ACTION],
    description: 'Файтинг с обновленной вселенной и зрелищными добиваниями.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'mk1-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1999,
        region: Region.ALL_WORLD
      },
      {
        id: 'mk1-2',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Kollector Edition',
        price: 4999,
        oldPrice: 5999,
        region: Region.EUROPE
      },
      {
        id: 'mk1-3',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Deluxe',
        price: 2299,
        region: Region.ALL_WORLD
      },
      {
        id: 'mk1-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1699,
        region: Region.RU
      },
      {
        id: 'mk1-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Kollector Edition',
        price: 4599,
        region: Region.KZ
      },
      {
        id: 'mk1-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2799,
        region: Region.BY
      }
    ],
    rating: 67.72
  },
  {
    name: 'REMNANT II',
    slug: 'remnant-2',
    externalId: '1282100',
    releaseDate: 1690243200,
    genres: [GameGenre.ACTION, GameGenre.RPG, GameGenre.SHOOTER],
    description: 'Кооперативный экшен-RPG с процедурной генерацией миров.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'rem2-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2499,
        region: Region.ALL_WORLD
      },
      {
        id: 'rem2-2',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3299,
        oldPrice: 3999,
        region: Region.EUROPE
      },
      {
        id: 'rem2-3',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Collector',
        price: 4299,
        region: Region.ALL_WORLD
      },
      {
        id: 'rem2-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2199,
        region: Region.RU
      },
      {
        id: 'rem2-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2799,
        region: Region.KZ
      },
      {
        id: 'rem2-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 3999,
        region: Region.BY
      }
    ]
  },
  {
    name: "Baldur's Gate 3",
    slug: 'baldurs-gate-3',
    externalId: '1086940',
    releaseDate: 1691020800,
    genres: [GameGenre.RPG, GameGenre.STRATEGY, GameGenre.ADVENTURE],
    description: 'Партийная RPG с глубоким сюжетом и пошаговыми боями.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'bg3-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 3299,
        region: Region.ALL_WORLD
      },
      {
        id: 'bg3-2',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3999,
        oldPrice: 4599,
        region: Region.EUROPE
      },
      {
        id: 'bg3-3',
        deliveryType: DeliveryType.EPIC_KEY,
        edition: 'Collector',
        price: 5999,
        region: Region.ALL_WORLD
      },
      {
        id: 'bg3-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2799,
        region: Region.RU
      },
      {
        id: 'bg3-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 3499,
        region: Region.KZ
      },
      {
        id: 'bg3-6',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Collector',
        price: 6499,
        region: Region.EUROPE
      }
    ]
  },
  {
    name: 'BattleBit Remastered',
    slug: 'battlebit-remastered',
    externalId: '671860',
    releaseDate: 1686787200,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Массовые PvP-сражения в low-poly стилистике.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'bb-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 499,
        region: Region.ALL_WORLD
      },
      {
        id: 'bb-2',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Standard',
        price: 599,
        region: Region.ALL_WORLD
      },
      {
        id: 'bb-3',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 399,
        region: Region.RU
      },
      {
        id: 'bb-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 359,
        region: Region.KZ
      },
      {
        id: 'bb-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 349,
        region: Region.BY
      },
      {
        id: 'bb-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 799,
        region: Region.UA
      }
    ],
    rating: 82.62
  },
  {
    name: 'Terraria',
    slug: 'terraria',
    externalId: '105600',
    releaseDate: 1305504000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.INDIE, GameGenre.SURVIVAL],
    description: 'Песочница с исследованием, строительством и боссами.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'ter-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 299,
        region: Region.ALL_WORLD
      },
      {
        id: 'ter-2',
        deliveryType: DeliveryType.NINTENDO_KEY,
        edition: 'Switch Edition',
        price: 699,
        region: Region.ALL_WORLD
      },
      {
        id: 'ter-3',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 249,
        region: Region.RU
      },
      {
        id: 'ter-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 239,
        region: Region.KZ
      },
      {
        id: 'ter-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 229,
        region: Region.BY
      },
      {
        id: 'ter-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Anniversary',
        price: 499,
        oldPrice: 799,
        region: Region.UA
      }
    ],
    rating: 96.91
  },
  {
    name: "Garry's Mod",
    slug: 'garrys-mod',
    externalId: '4000',
    releaseDate: 1164758400,
    genres: [GameGenre.INDIE, GameGenre.SIMULATION],
    description: 'Песочница на Source для пользовательских режимов и модов.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'gm-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 199,
        region: Region.ALL_WORLD
      },
      {
        id: 'gm-2',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 149,
        region: Region.RU
      },
      {
        id: 'gm-3',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 139,
        region: Region.KZ
      },
      {
        id: 'gm-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 129,
        region: Region.BY
      },
      {
        id: 'gm-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Community Pack',
        price: 299,
        region: Region.UA
      },
      {
        id: 'gm-6',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Bundle',
        price: 399,
        region: Region.ALL_WORLD
      }
    ],
    rating: 96.49
  },
  {
    name: 'Red Dead Redemption 2',
    slug: 'red-dead-redemption-2',
    externalId: '1174180',
    releaseDate: 1540512000,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description: 'История банды на Диком Западе в большом открытом мире.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'rdr2-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1699,
        region: Region.ALL_WORLD
      },
      {
        id: 'rdr2-2',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Ultimate',
        price: 2499,
        oldPrice: 2999,
        region: Region.EUROPE
      },
      {
        id: 'rdr2-3',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1499,
        region: Region.RU
      },
      {
        id: 'rdr2-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Ultimate',
        price: 2299,
        region: Region.KZ
      },
      {
        id: 'rdr2-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Premium',
        price: 2899,
        region: Region.BY
      },
      {
        id: 'rdr2-6',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Standard',
        price: 1799,
        region: Region.ALL_WORLD
      }
    ],
    rating: 93.01
  },
  {
    name: 'Cyberpunk 2077',
    slug: 'cyberpunk-2077',
    externalId: '1091500',
    releaseDate: 1607558400,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Ролевая игра в футуристическом Найт-Сити с нелинейными квестами.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'cp2077-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 999,
        region: Region.ALL_WORLD
      },
      {
        id: 'cp2077-2',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Ultimate',
        price: 1999,
        oldPrice: 2499,
        region: Region.EUROPE
      },
      {
        id: 'cp2077-3',
        deliveryType: DeliveryType.EPIC_KEY,
        edition: 'Standard',
        price: 1099,
        region: Region.ALL_WORLD
      },
      {
        id: 'cp2077-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 799,
        region: Region.RU
      },
      {
        id: 'cp2077-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 1299,
        region: Region.KZ
      },
      {
        id: 'cp2077-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 2499,
        region: Region.BY
      }
    ]
  },
  {
    name: 'Elden Ring',
    slug: 'elden-ring',
    externalId: '1245620',
    releaseDate: 1645747200,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Soulslike с открытым миром и насыщенным исследованием.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'elden-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2499,
        region: Region.ALL_WORLD
      },
      {
        id: 'elden-2',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3499,
        oldPrice: 3999,
        region: Region.EUROPE
      },
      {
        id: 'elden-3',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Collector',
        price: 4499,
        region: Region.EUROPE
      },
      {
        id: 'elden-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2199,
        region: Region.RU
      },
      {
        id: 'elden-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2999,
        region: Region.KZ
      },
      {
        id: 'elden-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 3999,
        region: Region.BY
      }
    ]
  },
  {
    name: 'Helldivers 2',
    slug: 'helldivers-2',
    externalId: '553850',
    releaseDate: 1707350400,
    genres: [GameGenre.ACTION, GameGenre.SHOOTER],
    description: 'Кооперативный PvE-шутер про межгалактическую демократию.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'helld-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1299,
        region: Region.ALL_WORLD
      },
      {
        id: 'helld-2',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 1699,
        region: Region.EUROPE
      },
      {
        id: 'helld-3',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Premium',
        price: 2199,
        region: Region.ALL_WORLD
      },
      {
        id: 'helld-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1099,
        region: Region.RU
      },
      {
        id: 'helld-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 1699,
        region: Region.KZ
      },
      {
        id: 'helld-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Premium',
        price: 1999,
        region: Region.BY
      }
    ]
  },
  {
    name: 'Palworld',
    slug: 'palworld',
    externalId: '1623730',
    releaseDate: 1705622400,
    genres: [GameGenre.ADVENTURE, GameGenre.SURVIVAL],
    description: 'Выживание, крафт и коллекционирование существ в открытом мире.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'pal-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1999,
        region: Region.ALL_WORLD
      },
      {
        id: 'pal-2',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Collector',
        price: 2499,
        region: Region.ALL_WORLD
      },
      {
        id: 'pal-3',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1699,
        region: Region.RU
      },
      {
        id: 'pal-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2299,
        region: Region.KZ
      },
      {
        id: 'pal-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Premium',
        price: 2799,
        region: Region.BY
      },
      {
        id: 'pal-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1599,
        region: Region.UA
      }
    ]
  },
  {
    name: 'Black Myth: Wukong',
    slug: 'black-myth-wukong',
    externalId: '2358720',
    releaseDate: 1724112000,
    genres: [GameGenre.ACTION, GameGenre.RPG],
    description: 'Экшен по мотивам китайской мифологии с кинематографичными боями.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'bmw-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2799,
        region: Region.ALL_WORLD
      },
      {
        id: 'bmw-2',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Collector',
        price: 4799,
        region: Region.EUROPE
      },
      {
        id: 'bmw-3',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2399,
        region: Region.RU
      },
      {
        id: 'bmw-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 3299,
        region: Region.KZ
      },
      {
        id: 'bmw-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 4499,
        region: Region.BY
      },
      {
        id: 'bmw-6',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Premium',
        price: 3599,
        region: Region.ALL_WORLD
      }
    ]
  },
  {
    name: 'Hades II',
    slug: 'hades-2',
    externalId: '1145350',
    releaseDate: 1714953600,
    genres: [GameGenre.ACTION, GameGenre.INDIE],
    description: 'Рогалик с быстрым боем, билдостроением и сильным нарративом.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'hades2-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 1499,
        region: Region.ALL_WORLD
      },
      {
        id: 'hades2-2',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 1799,
        region: Region.EUROPE
      },
      {
        id: 'hades2-3',
        deliveryType: DeliveryType.NINTENDO_KEY,
        edition: 'Switch Edition',
        price: 1699,
        region: Region.ALL_WORLD
      },
      {
        id: 'hades2-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1299,
        region: Region.RU
      },
      {
        id: 'hades2-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 1599,
        region: Region.KZ
      },
      {
        id: 'hades2-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Indie Pack',
        price: 1999,
        region: Region.BY
      }
    ]
  },
  {
    name: 'Stardew Valley',
    slug: 'stardew-valley',
    externalId: '413150',
    releaseDate: 1456444800,
    genres: [GameGenre.INDIE, GameGenre.SIMULATION, GameGenre.RPG],
    description: 'Фермерский симулятор с прокачкой, отношениями и крафтом.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'sv-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 399,
        region: Region.ALL_WORLD
      },
      {
        id: 'sv-2',
        deliveryType: DeliveryType.NINTENDO_KEY,
        edition: 'Switch Edition',
        price: 799,
        region: Region.EUROPE
      },
      {
        id: 'sv-3',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 349,
        region: Region.RU
      },
      {
        id: 'sv-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 329,
        region: Region.KZ
      },
      {
        id: 'sv-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 599,
        region: Region.BY
      },
      {
        id: 'sv-6',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Complete',
        price: 899,
        region: Region.ALL_WORLD
      }
    ],
    rating: 96.91
  },
  {
    name: 'Hogwarts Legacy',
    slug: 'hogwarts-legacy',
    externalId: '990080',
    releaseDate: 1675987200,
    genres: [GameGenre.ACTION, GameGenre.RPG, GameGenre.ADVENTURE],
    description: 'Открытый мир Хогвартса с магическими дуэлями и квестами.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'hog-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2499,
        oldPrice: 3999,
        region: Region.ALL_WORLD
      },
      {
        id: 'hog-2',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe Edition',
        price: 4299,
        region: Region.EUROPE
      },
      {
        id: 'hog-3',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Collector',
        price: 4999,
        region: Region.EUROPE
      },
      {
        id: 'hog-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2199,
        region: Region.RU
      },
      {
        id: 'hog-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe Edition',
        price: 3899,
        region: Region.KZ
      },
      {
        id: 'hog-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 4599,
        region: Region.BY
      }
    ]
  },
  {
    name: 'Lethal Company',
    slug: 'lethal-company',
    externalId: '1966720',
    releaseDate: 1698019200,
    genres: [GameGenre.HORROR, GameGenre.INDIE],
    description: 'Кооперативный хоррор про сбор лута на опасных локациях.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'lc-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 299,
        region: Region.ALL_WORLD
      },
      {
        id: 'lc-2',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 249,
        region: Region.RU
      },
      {
        id: 'lc-3',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 229,
        region: Region.KZ
      },
      {
        id: 'lc-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Horror Pack',
        price: 499,
        region: Region.BY
      },
      {
        id: 'lc-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 699,
        region: Region.UA
      },
      {
        id: 'lc-6',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Bundle',
        price: 799,
        region: Region.ALL_WORLD
      }
    ]
  },
  {
    name: 'The Finals',
    slug: 'the-finals',
    externalId: '2073850',
    releaseDate: 1701907200,
    genres: [GameGenre.SHOOTER, GameGenre.ACTION],
    description: 'Соревновательный шутер с разрушаемым окружением.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'tf-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 999,
        region: Region.ALL_WORLD
      },
      {
        id: 'tf-2',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Standard',
        price: 1099,
        region: Region.ALL_WORLD
      },
      {
        id: 'tf-3',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 899,
        region: Region.RU
      },
      {
        id: 'tf-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Founders Pack',
        price: 1299,
        region: Region.KZ
      },
      {
        id: 'tf-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Founders Pack',
        price: 1499,
        region: Region.EUROPE
      },
      {
        id: 'tf-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Exclusive',
        price: 1999,
        region: Region.BY
      }
    ]
  },
  {
    name: 'EA SPORTS FC 25',
    slug: 'ea-sports-fc-25',
    externalId: '2669320',
    releaseDate: 1727395200,
    genres: [GameGenre.SPORTS, GameGenre.SIMULATION],
    description: 'Футбольный симулятор с актуальными составами и онлайн-режимами.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'ea25-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 3999,
        oldPrice: 4999,
        region: Region.EUROPE
      },
      {
        id: 'ea25-2',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Ultimate',
        price: 6999,
        region: Region.ALL_WORLD
      },
      {
        id: 'ea25-3',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Deluxe',
        price: 4999,
        region: Region.EUROPE
      },
      {
        id: 'ea25-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 3499,
        region: Region.RU
      },
      {
        id: 'ea25-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 4499,
        region: Region.KZ
      },
      {
        id: 'ea25-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Ultimate',
        price: 6499,
        region: Region.BY
      }
    ]
  },
  {
    name: 'Forza Horizon 5',
    slug: 'forza-horizon-5',
    externalId: '1551360',
    releaseDate: 1636416000,
    genres: [GameGenre.RACING, GameGenre.SIMULATION],
    description: 'Аркадные гонки в открытом мире Мексики.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'fh5-1',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Standard',
        price: 1999,
        region: Region.ALL_WORLD
      },
      {
        id: 'fh5-2',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Deluxe',
        price: 3499,
        oldPrice: 3999,
        region: Region.EUROPE
      },
      {
        id: 'fh5-3',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Premium',
        price: 5999,
        region: Region.ALL_WORLD
      },
      {
        id: 'fh5-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 1799,
        region: Region.RU
      },
      {
        id: 'fh5-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 3299,
        region: Region.KZ
      },
      {
        id: 'fh5-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Premium',
        price: 4599,
        region: Region.BY
      }
    ]
  },
  {
    name: 'Assassin’s Creed Shadows',
    slug: 'assassins-creed-shadows',
    externalId: '3159330',
    releaseDate: 1742428800,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE, GameGenre.RPG],
    description: 'Стелс-экшен в феодальной Японии с двумя протагонистами.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'acs-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 2999,
        region: Region.ALL_WORLD
      },
      {
        id: 'acs-2',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 3799,
        oldPrice: 4299,
        region: Region.EUROPE
      },
      {
        id: 'acs-3',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Standard',
        price: 3499,
        region: Region.ALL_WORLD
      },
      {
        id: 'acs-4',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 2399,
        region: Region.RU
      },
      {
        id: 'acs-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 2999,
        region: Region.KZ
      },
      {
        id: 'acs-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Collector',
        price: 4499,
        region: Region.BY
      }
    ]
  },
  {
    name: 'GTA VI',
    slug: 'gta-6',
    externalId: 'gta6',
    releaseDate: 1795046400,
    genres: [GameGenre.ACTION, GameGenre.ADVENTURE],
    description: 'Криминальный open-world экшен нового поколения.',
    image: PLACEHOLDER_IMAGE,
    priceVariants: [
      {
        id: 'gta6-1',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Standard',
        price: 3999,
        region: Region.ALL_WORLD
      },
      {
        id: 'gta6-2',
        deliveryType: DeliveryType.STEAM_KEY,
        edition: 'Deluxe',
        price: 4999,
        oldPrice: 5999,
        region: Region.EUROPE
      },
      {
        id: 'gta6-3',
        deliveryType: DeliveryType.XBOX_KEY,
        edition: 'Standard',
        price: 4499,
        region: Region.ALL_WORLD
      },
      {
        id: 'gta6-4',
        deliveryType: DeliveryType.PLAYSTATION_KEY,
        edition: 'Standard',
        price: 4499,
        region: Region.ALL_WORLD
      },
      {
        id: 'gta6-5',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Standard',
        price: 3499,
        region: Region.RU
      },
      {
        id: 'gta6-6',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Deluxe',
        price: 3999,
        region: Region.KZ
      },
      {
        id: 'gta6-7',
        deliveryType: DeliveryType.STEAM_GIFT,
        edition: 'Premium',
        price: 5499,
        region: Region.BY
      }
    ]
  }
];
