import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksRoutingModule } from './books/books-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: '', redirectTo: '/books', pathMatch: 'full'},
{ path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
{path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BooksRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
