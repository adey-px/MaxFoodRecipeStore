import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes-main/recipes.model';
import { RecipeService } from '../recipes-main/recipes.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

// Recipe objects/instances from recipe model
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private newService: RecipeService) {
  }

  /* recipe objects from service data */
  ngOnInit() {
    this.recipes = this.newService.getRecipes()
  }
}
