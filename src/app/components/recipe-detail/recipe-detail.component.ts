import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private _rs: RecipeService) {}

  ngOnInit(): void {}

  onAddToShoppingList(ingredients: Ingredient[]) {
    this._rs.addIngredientsToShoppingList(ingredients);
  }
}
