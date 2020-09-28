import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from 'src/app/product/models/product';
import { ProductFormPresenter } from '../product-form-presenter/product-form.presenter';

@Component({
  selector: 'product-form-presentation-ui',
  templateUrl: './product-form.presentation.html',
  styleUrls: ['./product-form.presentation.scss'],
  viewProviders: [ProductFormPresenter]
})
export class ProductFormPresentation implements OnInit {

  // event for add project
  @Output() addProduct:EventEmitter<Product>;
  // event for update project
  @Output() updateProduct:EventEmitter<Product>;
  productForm: FormGroup;
  
  constructor(private productFormPresenter: ProductFormPresenter) {
    productFormPresenter.buildProducForm();
    this.addProduct = new EventEmitter<Product>();
    this.updateProduct = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

}
