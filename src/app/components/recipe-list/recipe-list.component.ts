import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Omelette du Fromage',
      'Eggs lmao',
      'https://www.canalvie.com/polopoly_fs/1.8675792.1547744085!/image/Omelette%20fromage.jpg_gen/derivatives/cvlandscape_499_281/Omelette%20fromage.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
