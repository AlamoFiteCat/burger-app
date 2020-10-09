import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesSubscription: Subscription;
  constructor(private _rs: RecipeService) {}

  ngOnInit(): void {
    this.recipesSubscription = this._rs.recipesChanged.subscribe((recs) => {
      this.recipes = recs;
    });
    this.recipes = this._rs.getRecipes();
  }

  ngOnDestroy() {
    this.recipesSubscription.unsubscribe();
  }
}
