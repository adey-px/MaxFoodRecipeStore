import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipes-page/recipes-page.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

//
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  //
  @Output() recipeSelected = new EventEmitter<void>();

  recipeSelectHandler() {
    this.recipeSelected.emit()
  }
}


/* NB:
  @Input allows binding of event from outside this file
  @Output allows listen to even from outside
*/
