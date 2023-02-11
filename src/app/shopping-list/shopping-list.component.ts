import { Component } from '@angular/core';
import { Ingredient } from '../common/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

//
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 25),
    new Ingredient('Tomatoes', 30),
  ];

  onAddIngredient (ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}
