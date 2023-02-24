import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/ingredient.module';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})

//
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shpService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shpService.getIngredients();
    this.shpService.updateIngredients.subscribe((
      ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      })
  }
}
