import {EventEmitter} from '@angular/core';
import { Recipe } from "./recipes.model";
import { Ingredient } from '../common/ingredient.module';

// Recipe service from recipe-list
export class RecipeService {
  singleRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe('Recipe One',
      'Jollof rice super recipe',
      'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg',
      [
        new Ingredient('Meat Balls', 20),
        new Ingredient('French Files', 80)
      ],
    ),

    new Recipe('Recipe Two',
      'Yam porridge recipe',
      'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg',
      [
        new Ingredient('Tomato Puree', 50),
        new Ingredient('Zoology Carrot', 90)
      ],
    )
  ];

  getRecipes() {
    return this.recipes.slice()
  }
}


/*
Use the RecipeService in recipes-page
*/
