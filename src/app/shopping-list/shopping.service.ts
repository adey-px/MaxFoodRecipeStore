import { Ingredient } from '../common/ingredient.module';
import {EventEmitter} from '@angular/core'

export class ShoppingService {
  updateIngredients = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 25),
    new Ingredient('Tomatoes', 30),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.updateIngredients.emit(this.ingredients.slice());
  }
}
