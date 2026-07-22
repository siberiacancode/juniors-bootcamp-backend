import { PizzaEntitySchema } from '../pizza.schema';
import { Dough, Ingredient, Size } from '../pizzas.enums';

export const PIZZAS: PizzaEntitySchema[] = [
  {
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
    sizes: [
      { type: Size.SMALL, price: 499 },
      { type: Size.MEDIUM, price: 799 },
      { type: Size.LARGE, price: 1149 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 449 },
      { type: Size.MEDIUM, price: 749 },
      { type: Size.LARGE, price: 1099 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 549 },
      { type: Size.MEDIUM, price: 849 },
      { type: Size.LARGE, price: 1249 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 549 },
      { type: Size.MEDIUM, price: 849 },
      { type: Size.LARGE, price: 1249 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 499 },
      { type: Size.MEDIUM, price: 799 },
      { type: Size.LARGE, price: 1149 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 549 },
      { type: Size.MEDIUM, price: 849 },
      { type: Size.LARGE, price: 1249 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 599 },
      { type: Size.MEDIUM, price: 899 },
      { type: Size.LARGE, price: 1299 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 599 },
      { type: Size.MEDIUM, price: 899 },
      { type: Size.LARGE, price: 1299 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 599 },
      { type: Size.MEDIUM, price: 899 },
      { type: Size.LARGE, price: 1299 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 649 },
      { type: Size.MEDIUM, price: 999 },
      { type: Size.LARGE, price: 1449 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 649 },
      { type: Size.MEDIUM, price: 999 },
      { type: Size.LARGE, price: 1449 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 649 },
      { type: Size.MEDIUM, price: 999 },
      { type: Size.LARGE, price: 1449 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    name: 'Маринара',
    ingredients: [
      {
        type: Ingredient.MOZZARELLA,
        price: 70,
        img: '/static/images/ingredient/mozzarella.png'
      }
    ],

    description: 'Простая пицца с томатным соусом, чесноком, оливковым маслом и орегано.',
    sizes: [
      { type: Size.SMALL, price: 449 },
      { type: Size.MEDIUM, price: 749 },
      { type: Size.LARGE, price: 1099 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 499 },
      { type: Size.MEDIUM, price: 799 },
      { type: Size.LARGE, price: 1149 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 549 },
      { type: Size.MEDIUM, price: 849 },
      { type: Size.LARGE, price: 1249 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 649 },
      { type: Size.MEDIUM, price: 999 },
      { type: Size.LARGE, price: 1449 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 599 },
      { type: Size.MEDIUM, price: 899 },
      { type: Size.LARGE, price: 1299 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 649 },
      { type: Size.MEDIUM, price: 999 },
      { type: Size.LARGE, price: 1449 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 549 },
      { type: Size.MEDIUM, price: 849 },
      { type: Size.LARGE, price: 1249 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
    sizes: [
      { type: Size.SMALL, price: 549 },
      { type: Size.MEDIUM, price: 849 },
      { type: Size.LARGE, price: 1249 }
    ],
    doughs: [
      { type: Dough.THIN, price: 0 },
      { type: Dough.THICK, price: 50 }
    ],
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
  }
];
