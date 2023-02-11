import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes-page/recipes-page.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

// Array of recipe obj from recipe model
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Jollof rice super recipe', 'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg' ),

    new Recipe('Recipe 2', 'Yam porridge recipe', 'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg' )
  ];
  //
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

 onRecipeSelect(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
