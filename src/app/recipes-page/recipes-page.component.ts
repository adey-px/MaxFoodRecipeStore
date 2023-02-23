import { Component } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
  providers: [RecipeService]
})
//
export class RecipesPageComponent {
 selectedRecipe: Recipe;
}
