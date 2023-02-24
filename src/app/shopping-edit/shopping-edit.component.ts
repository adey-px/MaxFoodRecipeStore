import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../common/ingredient.module';
import { ShoppingService } from '../shopping-list/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})

//
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameField: ElementRef;
  @ViewChild('amountInput') amountField: ElementRef;

  constructor(private shpService: ShoppingService) {

  }

  addIngredientHandler() {
    const ingredientName = this.nameField.nativeElement.value;
    const ingredientAmount = this.amountField.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.shpService.addIngredient(newIngredient)
  }
}
