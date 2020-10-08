import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private _sls: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this._sls.getIngredients();
    this._sls.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
}
