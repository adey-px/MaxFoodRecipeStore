import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes-main',
  templateUrl: './recipes-main.component.html',
  styleUrls: ['./recipes-main.component.css'],
  providers: [RecipeService],
})

//
export class RecipesMainComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private newService: RecipeService) {}

  ngOnInit() {
    this.newService.singleRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
