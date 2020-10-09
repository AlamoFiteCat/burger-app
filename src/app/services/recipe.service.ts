import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient';
import { Recipe } from '../interfaces/recipe';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe(
      '0',
      'Omelette du Fromage',
      'Eggs lmao',
      'https://www.canalvie.com/polopoly_fs/1.8675792.1547744085!/image/Omelette%20fromage.jpg_gen/derivatives/cvlandscape_499_281/Omelette%20fromage.jpg',
      [new Ingredient('eggs', 2), new Ingredient('cheese', 1)]
    ),
  ];

  constructor(private _sls: ShoppingListService, private _router: Router) {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next([...this.recipes]);
    this._router.navigate(['/']);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this._sls.addMultipleIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next([...this.recipes]);
    this._router.navigate(['/']);
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next([...this.recipes]);
    this._router.navigate(['/']);
  }
}
