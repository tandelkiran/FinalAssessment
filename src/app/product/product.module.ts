import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListContainer } from './product-list-container/product-list.container.';
import { ProductListPresentation } from './product-list-container/product-list-presentation/product-list.presentation';
import {
  ProductFormPresentation } from './product-list-container/product-list-presentation/product-form-presentation/product-form.presentation';

@NgModule({
  declarations: [ProductListContainer, ProductListPresentation, ProductFormPresentation],
  imports: [
    CommonModule,
    ProductRoutingModule,
    OverlayModule,
    PortalModule
  ],
  entryComponents: [ProductFormPresentation]
})
export class ProductModule { }
