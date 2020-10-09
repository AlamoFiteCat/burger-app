import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Egg', 3),
    new Ingredient('Tomato', 5),
    new Ingredient('Orange', 2),
  ];

  constructor() {}

  getIngredients() {
    return [...this.ingredients];
  }

  addMultipleIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }
}
