import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: ':listID/:token',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: ItemListComponent
      },
      {
        path: ':propertyId',
        component: ItemComponent
      }
    ]
  }
  // {
  //   path: '',
  //   component: ItemListComponent
  // },
  // {
  //   path: ':propertyId',
  //   component: ItemComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
