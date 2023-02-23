import { Recipe } from "./recipes.model";

// Recipe service from recipe-list
export class RecipeService {
    private recipes: Recipe[] = [
    new Recipe('Recipe One', 'Jollof rice super recipe', 'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg' ),

    new Recipe('Recipe Two', 'Yam porridge recipe', 'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg' )
  ];

  getRecipes() {
    return this.recipes.slice()
  }
}


/*
Use the RecipeService in recipes-page
*/
