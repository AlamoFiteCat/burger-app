import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from '../../components/recipes/recipes.component';
import { ShoppingListComponent } from '../../components/shopping-list/shopping-list.component';
import { RecipeStartComponent } from '../../components/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../../components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 'src/app/components/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
