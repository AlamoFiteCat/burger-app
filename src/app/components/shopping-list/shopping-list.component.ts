import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../interfaces/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Egg', 3),
    new Ingredient('Tomato', 5),
    new Ingredient('Orange', 2),
  ];
  constructor() {}

  ngOnInit(): void {}
}
