import { Ingredient } from './pizzas.enums';

export const TOPPINGS: { type: Ingredient; price: number; img: string }[] = [
  { type: Ingredient.PINEAPPLE, price: 80, img: '/static/images/ingredient/pineapple.png' },
  { type: Ingredient.GREEN_PEPPER, price: 60, img: '/static/images/ingredient/green_pepper.png' },
  { type: Ingredient.MUSHROOMS, price: 80, img: '/static/images/ingredient/mushrooms.png' },
  { type: Ingredient.BACON, price: 80, img: '/static/images/ingredient/bacon.png' },
  { type: Ingredient.SHRIMP, price: 80, img: '/static/images/ingredient/shrimps.png' },
  { type: Ingredient.HAM, price: 80, img: '/static/images/ingredient/ham.png' },
  { type: Ingredient.MOZZARELLA, price: 70, img: '/static/images/ingredient/mozzarella.png' },
  { type: Ingredient.PEPPERONI, price: 120, img: '/static/images/ingredient/peperoni.png' },
  {
    type: Ingredient.CHICKEN_FILLET,
    price: 80,
    img: '/static/images/ingredient/chicken_fillet.png'
  },
  { type: Ingredient.ONION, price: 80, img: '/static/images/ingredient/onion.png' },
  { type: Ingredient.BASIL, price: 80, img: '/static/images/ingredient/basil.png' },
  { type: Ingredient.CHILE, price: 80, img: '/static/images/ingredient/chile.png' },
  { type: Ingredient.CHEDDAR, price: 80, img: '/static/images/ingredient/cheddar.png' },
  { type: Ingredient.MEATBALLS, price: 80, img: '/static/images/ingredient/meatballs.png' },
  { type: Ingredient.PICKLE, price: 80, img: '/static/images/ingredient/pickle.png' },
  { type: Ingredient.TOMATO, price: 80, img: '/static/images/ingredient/tomato.png' },
  { type: Ingredient.FETA, price: 80, img: '/static/images/ingredient/feta.png' }
];
