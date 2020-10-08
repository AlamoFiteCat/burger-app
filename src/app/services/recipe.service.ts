import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient';
import { Recipe } from '../interfaces/recipe';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Omelette du Fromage',
      'Eggs lmao',
      'https://www.canalvie.com/polopoly_fs/1.8675792.1547744085!/image/Omelette%20fromage.jpg_gen/derivatives/cvlandscape_499_281/Omelette%20fromage.jpg',
      [new Ingredient('eggs', 2), new Ingredient('cheese', 2)]
    ),
  ];

  constructor(private _sls: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this._sls.addMultipleIngredients(ingredients);
  }
}