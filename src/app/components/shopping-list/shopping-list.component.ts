import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../interfaces/ingredient';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientsSubscription: Subscription;
  constructor(private _sls: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this._sls.getIngredients();
    this.ingredientsSubscription = this._sls.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this._sls.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }
}
