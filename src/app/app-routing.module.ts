import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: ItemListComponent
  },
  {
    path: ':recordId',
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
