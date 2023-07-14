import { Ingredient } from "../common/ingredient.module";

// Define structure for a recipe
export class Recipe {
  public name: string
  public description: string
  public imagePath: string
  public ingredients: Ingredient[]

  constructor(name: string, desc: string, imagePath: string,
    ingredients: Ingredient[]) {
    this.name = name
    this.description = desc
    this.imagePath = imagePath
    this.ingredients = ingredients
  }
}

/*
Use class definition imported in app-recipe-list
to create each recipe object
*/
