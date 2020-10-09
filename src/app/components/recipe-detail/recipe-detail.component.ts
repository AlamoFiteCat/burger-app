import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private _rs: RecipeService, private _ar: ActivatedRoute) {}

  ngOnInit(): void {
    this._ar.params.subscribe((params) => {
      this.id = +params['id'];
      this.recipe = this._rs.getRecipeById(this.id);
    });
  }

  onDeleteRecipe() {
    this._rs.deleteRecipe(this.id);
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this._rs.addIngredientsToShoppingList(ingredients);
  }
}
