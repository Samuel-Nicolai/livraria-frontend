import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material modules imports
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatStepperModule } from '@angular/material/stepper'
import { MatTabsModule } from '@angular/material/tabs'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatMenuModule } from '@angular/material/menu'

// Components imports
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LivroItemComponent } from './livro-item/livro-item.component';
import { HomeComponent } from './home/home.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { AuthorsBooksComponent } from './authors-books/authors-books.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LivroItemComponent,
    HomeComponent,
    CategoryBooksComponent,
    ShoppingcartComponent,
    ReadmoreComponent,
    SearchComponent,
    DetailsComponent,
    AuthorsBooksComponent,
    CheckoutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatStepperModule,
    MatTabsModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
