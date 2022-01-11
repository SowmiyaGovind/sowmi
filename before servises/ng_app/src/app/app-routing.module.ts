import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTableComponent } from './book-table/book-table.component';
import { NewBookComponent } from './new-book/new-book.component';

const routes: Routes = [
  {
    path:"", component: BookTableComponent
  },
  {
    path:"form", component: NewBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
