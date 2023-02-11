import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../common/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

//
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameField: ElementRef
  @ViewChild('amountInput') amountField: ElementRef

  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  addIngredientHandler() {
    const ingredientName = this.nameField.nativeElement.value
    const ingredientAmount = this.amountField.nativeElement.value
    const newIngredient = new Ingredient(ingredientName, ingredientAmount)

    this.ingredientAdded.emit(newIngredient)
  }
}
