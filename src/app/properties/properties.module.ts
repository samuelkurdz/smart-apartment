import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';


const routes: Routes = [
  {
    path: '',
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
];

@NgModule({
  declarations: [
    WrapperComponent,
    ItemListComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PropertiesModule { }
