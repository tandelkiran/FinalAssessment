import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListContainer } from './product-list-container/product-list.container.';


const routes: Routes = [
  { path: '', component: ProductListContainer }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
