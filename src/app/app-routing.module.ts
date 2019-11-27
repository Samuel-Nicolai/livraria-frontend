import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { CategoryBooksComponent } from './category-books/category-books.component'
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component'
import { SearchComponent } from './search/search.component'
import { DetailsComponent } from './details/details.component'
import { AuthorsBooksComponent } from './authors-books/authors-books.component'
import { CheckoutComponent } from './checkout/checkout.component'
import { UserComponent } from './user/user.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category/:id', component: CategoryBooksComponent },
  { path: 'cart', component: ShoppingcartComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'author-books/:id', component: AuthorsBooksComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'user', component: UserComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
