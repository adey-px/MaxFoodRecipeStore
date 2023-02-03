//
// Define structure for a recipe
export class Recipe {
  public name: string
  public description: string
  public imagePath: string

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name
    this.description = desc
    this.imagePath = imagePath
  }
}

/* Use the class definition imported in app-recipe-list
  to create each recipe object
*/
