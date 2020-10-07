import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RecipesComponent, FooterComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent, ShoppingListComponent, ShoppingEditComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
