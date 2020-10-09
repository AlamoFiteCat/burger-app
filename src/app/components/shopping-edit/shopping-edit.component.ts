import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Subscription } from 'rxjs';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private _sls: ShoppingListService) {}

  @ViewChild('f') slForm: NgForm;
  editingSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  ngOnInit(): void {
    this.editingSubscription = this._sls.startedEditing.subscribe((index) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this._sls.getIngredientById(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }

  onAddItem(form: NgForm) {
    if (this.editMode) {
      this._sls.updateIngredient(
        this.editedItemIndex,
        new Ingredient(form.value.name, form.value.amount)
      );
    } else {
      this._sls.addIngredient(
        new Ingredient(form.value.name, form.value.amount)
      );
    }
    this.resetForm();
  }

  resetForm() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDeleteItem() {
    this._sls.deleteIngredient(this.editedItemIndex);
    this.resetForm();
  }

  ngOnDestroy() {
    this.editingSubscription.unsubscribe();
  }
}
