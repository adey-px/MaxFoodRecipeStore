import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

// Array of recipe obj from recipe model
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simple Recipe', 'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg' ),

    new Recipe('Test Recipe', 'Simple Recipe', 'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg' )
  ];
}
