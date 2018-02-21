import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    
    recipeSelected =  new EventEmitter<Recipe>();

    private recipes: Recipe[] = 
    [
      new Recipe('A test Recipe', 'this is a test', 'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg'),
      new Recipe('A test Recipe', 'this is a test', 'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg')
    ]

    getRecipes() {
        return this.recipes.slice(); // slice to return a new copy of the array without returning the reference!
    }



}