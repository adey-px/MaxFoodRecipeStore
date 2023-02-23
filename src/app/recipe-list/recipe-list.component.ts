import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes-page/recipes.model';
import { RecipeService } from '../recipes-page/recipes.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

// Recipe objects/instances from recipe model
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  /* get recipe objects from service data */
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
