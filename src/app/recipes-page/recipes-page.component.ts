import { Component } from '@angular/core';
import { Recipe } from './recipes-page.model';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
//
export class RecipesPageComponent {
 selectedRecipe: Recipe;
}
