import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {


    constructor(private shoppingListService: ShoppingListService) {

    }
    
    recipeSelected =  new EventEmitter<Recipe>();

    private recipes: Recipe[] = 
    [
      new Recipe(
    'Schnitzel',
    'A tasty schnitzel',
    'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg',
     [
         new Ingredient('Meat', 1),
         new Ingredient('French Fries', 21)
     ]),

     new Recipe(
        'Burger',
        'this is a test',
        'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg',
         [
             new Ingredient('buns', 2),
             new Ingredient('Meat', 1),

         ]),
      
    ]

    getRecipes() {
        return this.recipes.slice(); // slice to return a new copy of the array without returning the reference!
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    
    }



}