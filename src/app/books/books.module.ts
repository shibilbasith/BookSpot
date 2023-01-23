import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';






import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { PopUpComponent } from './pop-up/pop-up.component';


@NgModule({
  declarations: [
    BooksComponent,
    AllBooksComponent,
    CartComponent,
    WishListComponent,
    LibraryComponent,
    HomeComponent,
    FilterPipe,
    CheckoutComponent,
    PopUpComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
    
  ],

})
export class BooksModule { }
