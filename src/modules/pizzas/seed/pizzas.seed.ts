import { PizzaEntitySchema } from '../pizza.schema';
import { Category, Ingredient, Option, Size } from '../pizzas.enums';

const CRUST_OPTIONS = [
  { type: Option.CRUST_THIN, price: 0 },
  { type: Option.CRUST_THICK, price: 50 },
  { type: Option.CRUST_CHEESE, price: 120 }
];

const CREAM_OPTIONS = [
  { type: Option.CREAM_WITHOUT, price: 0 },
  { type: Option.CREAM_WITH, price: 40 }
];

const PIZZA_SIZES = (small: number, medium: number, large: number) => [
  { type: Size.SMALL, price: small, volume: 25 },
  { type: Size.MEDIUM, price: medium, volume: 30 },
  { type: Size.LARGE, price: large, volume: 35 }
];

const WINGS_SIZES = [
  { type: Size.SMALL, price: 199, volume: 3 },
  { type: Size.MEDIUM, price: 499, volume: 9 },
  { type: Size.LARGE, price: 629, volume: 12 }
];

const MILKSHAKE_SIZES = [
  { type: Size.SMALL, price: 199, volume: 0.4 },
  { type: Size.MEDIUM, price: 259, volume: 0.6 }
];

export const PIZZAS: PizzaEntitySchema[] = [
  {
    category: Category.PIZZA,
    name: 'ШИФТ Суприм',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.PEPPERONI,
        price: 120,
        img: '/static/images/ingredient/peperoni.png'
      },

      {
        type: Ingredient.GREEN_PEPPER,
        price: 60,
        img: '/static/images/ingredient/green_pepper.png'
      },

      {
        type: Ingredient.MUSHROOMS,
        price: 80,
        img: '/static/images/ingredient/mushrooms.png'
      }
    ],
    description:
      'Шифт пицца с пепперони, колбасой, зеленым перцем, луком, оливками и шампиньонами.',
    sizes: PIZZA_SIZES(499, 799, 1149),
    options: CRUST_OPTIONS,
    calories: 320,
    protein: '18г',
    totalFat: '15г',
    carbohydrates: '28г',
    sodium: '860мг',
    allergens: ['молоко', 'пшеница', 'соевые бобы'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: true,
    img: '/static/images/pizza/1.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Маргарита',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.BASIL,
        price: 40,
        img: '/static/images/ingredient/basil.png'
      }
    ],
    description: 'Классическая пицца с томатным соусом, моцареллой и листьями базилика.',
    sizes: PIZZA_SIZES(449, 749, 1099),
    options: CRUST_OPTIONS,
    calories: 250,
    protein: '12г',
    totalFat: '10г',
    carbohydrates: '20г',
    sodium: '650мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: true,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/2.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Четыре Сыра',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.CHEDDAR,
        price: 90,
        img: '/static/images/ingredient/cheddar.png'
      },
      {
        type: Ingredient.PARMESAN,
        price: 90,
        img: '/static/images/ingredient/green_pepper.png'
      }
    ],

    description: 'Пицца с миксом моцареллы, чеддера, пармезана и феты.',
    sizes: PIZZA_SIZES(549, 849, 1249),
    options: CRUST_OPTIONS,
    calories: 380,
    protein: '20г',
    totalFat: '18г',
    carbohydrates: '30г',
    sodium: '780мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: true,
    isGlutenFree: false,
    isNovelty: true,
    isHit: false,
    img: '/static/images/pizza/3.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Гавайская',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.HAM,
        price: 150,
        img: '/static/images/ingredient/ham.png'
      },
      {
        type: Ingredient.PINEAPPLE,
        price: 100,
        img: '/static/images/ingredient/pineapple.png'
      }
    ],

    description: 'Пицца с ветчиной и ананасом.',
    sizes: PIZZA_SIZES(549, 849, 1249),
    options: CRUST_OPTIONS,
    calories: 420,
    protein: '22г',
    totalFat: '20г',
    carbohydrates: '32г',
    sodium: '800мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/4.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Пепперони',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.PEPPERONI,
        price: 120,
        img: '/static/images/ingredient/peperoni.png'
      }
    ],

    description: 'Классическая пицца с пепперони.',
    sizes: PIZZA_SIZES(499, 799, 1149),
    options: CRUST_OPTIONS,
    calories: 350,
    protein: '16г',
    totalFat: '14г',
    carbohydrates: '25г',
    sodium: '800мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/5.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Вегетарианская',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.TOMATO,
        price: 60,
        img: '/static/images/ingredient/tomato.png'
      },
      {
        type: Ingredient.MUSHROOMS,
        price: 80,
        img: '/static/images/ingredient/mushrooms.png'
      },
      {
        type: Ingredient.GREEN_PEPPER,
        price: 60,
        img: '/static/images/ingredient/green_pepper.png'
      }
    ],

    description: 'Пицца с овощами: помидорами, шампиньонами, зеленым перцем и красным луком.',
    sizes: PIZZA_SIZES(549, 849, 1249),
    options: CRUST_OPTIONS,
    calories: 280,
    protein: '14г',
    totalFat: '12г',
    carbohydrates: '30г',
    sodium: '700мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: true,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/6.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Мясная',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.BACON,
        price: 160,
        img: '/static/images/ingredient/bacon.png'
      },
      {
        type: Ingredient.SHRIMP,
        price: 120,
        img: '/static/images/ingredient/shrimps.png'
      }
    ],

    description: 'Пицца с ассорти мяса: говядиной, салями и беконом.',
    sizes: PIZZA_SIZES(599, 899, 1299),
    options: CRUST_OPTIONS,
    calories: 450,
    protein: '24г',
    totalFat: '22г',
    carbohydrates: '28г',
    sodium: '900мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/7.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Мексиканская',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },

      {
        type: Ingredient.CHILE,
        price: 80,
        img: '/static/images/ingredient/green_pepper.png'
      },

      {
        type: Ingredient.ONION,
        price: 60,
        img: '/static/images/ingredient/onion.png'
      }
    ],

    description:
      'Пицца с мексиканскими пряностями: говядиной, перцем чили, перцем халапеньо, кукурузой и луком.',
    sizes: PIZZA_SIZES(599, 899, 1299),
    options: CRUST_OPTIONS,
    calories: 380,
    protein: '18г',
    totalFat: '20г',
    carbohydrates: '32г',
    sodium: '820мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/8.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Кальцоне',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.HAM,
        price: 120,
        img: '/static/images/ingredient/ham.png'
      },
      {
        type: Ingredient.MUSHROOMS,
        price: 80,
        img: '/static/images/ingredient/mushrooms.png'
      }
    ],

    description: 'Запеченная пицца-кальцоне с моцареллой, ветчиной, грибами и яйцом.',
    sizes: PIZZA_SIZES(599, 899, 1299),
    options: CRUST_OPTIONS,
    calories: 420,
    protein: '20г',
    totalFat: '18г',
    carbohydrates: '30г',
    sodium: '900мг',
    allergens: ['молоко', 'пшеница', 'яйцо'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/9.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Мясоед',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },

      {
        type: Ingredient.BACON,
        price: 160,
        img: '/static/images/ingredient/bacon.png'
      },
      {
        type: Ingredient.HAM,
        price: 140,
        img: '/static/images/ingredient/ham.png'
      }
    ],

    description: 'Пицца для любителей мяса с салями, беконом и ветчиной.',
    sizes: PIZZA_SIZES(649, 999, 1449),
    options: CRUST_OPTIONS,
    calories: 480,
    protein: '26г',
    totalFat: '24г',
    carbohydrates: '32г',
    sodium: '950мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/10.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Морская',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.SHRIMP,
        price: 180,
        img: '/static/images/ingredient/shrimps.png'
      }
    ],

    description: 'Пицца с морепродуктами: креветками, мидиями, кальмарами и маслинами.',
    sizes: PIZZA_SIZES(649, 999, 1449),
    options: CRUST_OPTIONS,
    calories: 420,
    protein: '22г',
    totalFat: '20г',
    carbohydrates: '28г',
    sodium: '900мг',
    allergens: ['молоко', 'пшеница', 'морепродукты'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/11.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Четыре Сыра с грибами',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.CHEDDAR,
        price: 90,
        img: '/static/images/ingredient/cheddar.png'
      },
      {
        type: Ingredient.PARMESAN,
        price: 90,
        img: '/static/images/ingredient/green_pepper.png'
      },

      {
        type: Ingredient.MUSHROOMS,
        price: 80,
        img: '/static/images/ingredient/mushrooms.png'
      }
    ],

    description: 'Пицца с миксом моцареллы, чеддера, пармезана, феты и шампиньонами.',
    sizes: PIZZA_SIZES(649, 999, 1449),
    options: CRUST_OPTIONS,
    calories: 400,
    protein: '20г',
    totalFat: '18г',
    carbohydrates: '30г',
    sodium: '850мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: true,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/12.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Маринара',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      }
    ],

    description: 'Простая пицца с томатным соусом, чесноком, оливковым маслом и орегано.',
    sizes: PIZZA_SIZES(449, 749, 1099),
    options: CRUST_OPTIONS,
    calories: 280,
    protein: '6г',
    totalFat: '12г',
    carbohydrates: '30г',
    sodium: '650мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: true,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/13.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Фруктовая',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.PINEAPPLE,
        price: 100,
        img: '/static/images/ingredient/pineapple.png'
      }
    ],

    description: 'Пицца с фруктами: ананасом, бананом и персиком.',
    sizes: PIZZA_SIZES(499, 799, 1149),
    options: CRUST_OPTIONS,
    calories: 320,
    protein: '8г',
    totalFat: '10г',
    carbohydrates: '35г',
    sodium: '700мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: true,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/14.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Барбекю Чикен',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.CHICKEN_FILLET,
        price: 150,
        img: '/static/images/ingredient/chicken_fillet.png'
      },
      {
        type: Ingredient.ONION,
        price: 60,
        img: '/static/images/ingredient/onion.png'
      }
    ],

    description: 'Пицца с куриной грудкой, луком и барбекю соусом.',
    sizes: PIZZA_SIZES(549, 849, 1249),
    options: CRUST_OPTIONS,
    calories: 380,
    protein: '20г',
    totalFat: '16г',
    carbohydrates: '30г',
    sodium: '820мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/15.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Филадельфия',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.ONION,
        price: 50,
        img: '/static/images/ingredient/onion.png'
      }
    ],

    description: 'Пицца с лососем, сыром филадельфия, авокадо и зеленым луком.',
    sizes: PIZZA_SIZES(649, 999, 1449),
    options: CRUST_OPTIONS,
    calories: 420,
    protein: '22г',
    totalFat: '20г',
    carbohydrates: '30г',
    sodium: '900мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/16.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Пикантная Мексиканская',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.CHILE,
        price: 80,
        img: '/static/images/ingredient/green_pepper.png'
      },
      {
        type: Ingredient.ONION,
        price: 60,
        img: '/static/images/ingredient/onion.png'
      },
      {
        type: Ingredient.CHEDDAR,
        price: 90,
        img: '/static/images/ingredient/cheddar.png'
      }
    ],

    description:
      'Острая пицца с говядиной, перцем чили, перцем халапеньо, кукурузой, луком и топленным сыром.',
    sizes: PIZZA_SIZES(599, 899, 1299),
    options: CRUST_OPTIONS,
    calories: 400,
    protein: '22г',
    totalFat: '20г',
    carbohydrates: '32г',
    sodium: '820мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/17.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Карбонара',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.BACON,
        price: 160,
        img: '/static/images/ingredient/bacon.png'
      },
      {
        type: Ingredient.PARMESAN,
        price: 100,
        img: '/static/images/ingredient/green_pepper.png'
      }
    ],

    description: 'Пицца с беконом, сыром пармезан и яйцом в сливочном соусе.',
    sizes: PIZZA_SIZES(649, 999, 1449),
    options: CRUST_OPTIONS,
    calories: 450,
    protein: '24г',
    totalFat: '22г',
    carbohydrates: '28г',
    sodium: '900мг',
    allergens: ['молоко', 'пшеница', 'яйцо'],
    isVegetarian: false,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/18.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Греческая',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.TOMATO,
        price: 60,
        img: '/static/images/ingredient/tomato.png'
      },

      {
        type: Ingredient.GREEN_PEPPER,
        price: 60,
        img: '/static/images/ingredient/green_pepper.png'
      }
    ],

    description:
      'Пицца с томатным соусом, моцареллой, помидорами, оливками, перцем, фетой и орегано.',
    sizes: PIZZA_SIZES(549, 849, 1249),
    options: CRUST_OPTIONS,
    calories: 320,
    protein: '16г',
    totalFat: '14г',
    carbohydrates: '30г',
    sodium: '800мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: true,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/19.webp'
  },
  {
    category: Category.PIZZA,
    name: 'Шпинатная',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      },
      {
        type: Ingredient.PINEAPPLE,
        price: 100,
        img: '/static/images/ingredient/pineapple.png'
      },
      {
        type: Ingredient.PARMESAN,
        price: 100,
        img: '/static/images/ingredient/green_pepper.png'
      }
    ],

    description: 'Пицца с томатным соусом, моцареллой, шпинатом, фетой, чесноком и орегано.',
    sizes: PIZZA_SIZES(549, 849, 1249),
    options: CRUST_OPTIONS,
    calories: 300,
    protein: '14г',
    totalFat: '12г',
    carbohydrates: '28г',
    sodium: '700мг',
    allergens: ['молоко', 'пшеница'],
    isVegetarian: true,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/pizza/20.webp'
  },

  {
    category: Category.BREAKFAST,
    name: 'Хашбрауны',
    ingredients: [],
    description: 'Хрустящие картофельные оладьи. Идеальный завтрак.',
    sizes: [{ type: Size.SMALL, price: 220, volume: 1 }],
    options: [],
    calories: 260,
    protein: '4г',
    totalFat: '16г',
    carbohydrates: '25г',
    sodium: '410мг',
    allergens: ['пшеница'],
    isVegetarian: true,
    isGlutenFree: false,
    isNovelty: false,
    isHit: false,
    img: '/static/images/breakfast/hashbrowns.webp'
  },
  {
    category: Category.BREAKFAST,
    name: 'Омлет с ветчиной и грибами',
    ingredients: [
      { type: Ingredient.HAM, price: 80, img: '/static/images/ingredient/ham.png' },
      { type: Ingredient.MUSHROOMS, price: 80, img: '/static/images/ingredient/mushrooms.png' }
    ],
    description: 'Пышный омлет с ветчиной и шампиньонами.',
    sizes: [{ type: Size.SMALL, price: 260, volume: 1 }],
    options: [],
    calories: 310,
    protein: '20г',
    totalFat: '22г',
    carbohydrates: '6г',
    sodium: '640мг',
    allergens: ['яйцо', 'молоко'],
    isVegetarian: false,
    isGlutenFree: true,
    isNovelty: false,
    isHit: false,
    img: '/static/images/breakfast/omelette_ham.webp'
  },
  {
    category: Category.WINGS,
    name: 'Острые крылышки',
    ingredients: [],
    description: 'Куриные крылышки в остром соусе.',
    sizes: WINGS_SIZES,
    options: [],
    calories: 430,
    protein: '27г',
    totalFat: '29г',
    carbohydrates: '10г',
    sodium: '900мг',
    allergens: [],
    isVegetarian: false,
    isGlutenFree: true,
    isNovelty: false,
    isHit: true,
    img: '/static/images/wings/spicy.webp'
  },
  {
    category: Category.WINGS,
    name: 'Оригинальные крылышки',
    ingredients: [],
    description: 'Классические куриные крылышки.',
    sizes: WINGS_SIZES,
    options: [],
    calories: 410,
    protein: '26г',
    totalFat: '27г',
    carbohydrates: '8г',
    sodium: '820мг',
    allergens: [],
    isVegetarian: false,
    isGlutenFree: true,
    isNovelty: false,
    isHit: false,
    img: '/static/images/wings/original.webp'
  },
  {
    category: Category.MILKSHAKE,
    name: 'Милкшейк Ваниль',
    ingredients: [],
    description: 'Классический ванильный милкшейк.',
    sizes: MILKSHAKE_SIZES,
    options: CREAM_OPTIONS,
    calories: 340,
    protein: '8г',
    totalFat: '10г',
    carbohydrates: '54г',
    sodium: '180мг',
    allergens: ['молоко'],
    isVegetarian: true,
    isGlutenFree: true,
    isNovelty: false,
    isHit: false,
    img: '/static/images/milkshake/vanilla.webp'
  },
  {
    category: Category.MILKSHAKE,
    name: 'Милкшейк Клубника',
    ingredients: [],
    description: 'Милкшейк с клубникой.',
    sizes: MILKSHAKE_SIZES,
    options: CREAM_OPTIONS,
    calories: 360,
    protein: '8г',
    totalFat: '10г',
    carbohydrates: '58г',
    sodium: '190мг',
    allergens: ['молоко'],
    isVegetarian: true,
    isGlutenFree: true,
    isNovelty: true,
    isHit: false,
    img: '/static/images/milkshake/strawberry.webp'
  },
  {
    category: Category.MILKSHAKE,
    name: 'Милкшейк Шоколад',
    ingredients: [],
    description: 'Шоколадный милкшейк.',
    sizes: MILKSHAKE_SIZES,
    options: CREAM_OPTIONS,
    calories: 380,
    protein: '9г',
    totalFat: '11г',
    carbohydrates: '60г',
    sodium: '200мг',
    allergens: ['молоко'],
    isVegetarian: true,
    isGlutenFree: true,
    isNovelty: false,
    isHit: false,
    img: '/static/images/milkshake/chocolate.webp'
  }
];
