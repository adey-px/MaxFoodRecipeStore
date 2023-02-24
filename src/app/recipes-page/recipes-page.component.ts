import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
  providers: [RecipeService],
})

//
export class RecipesPageComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.singleRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
