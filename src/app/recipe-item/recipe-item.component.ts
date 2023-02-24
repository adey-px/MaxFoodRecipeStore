import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes-page/recipes.model';
import { RecipeService } from '../recipes-page/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})

// recipe item
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private newService: RecipeService) {}

  recipeSelectHandler() {
    this.newService.singleRecipe.emit(this.recipe);
  }
}

/*
@Input allows binding of event from outside this file
@Output allows listen to even from outside
*/
