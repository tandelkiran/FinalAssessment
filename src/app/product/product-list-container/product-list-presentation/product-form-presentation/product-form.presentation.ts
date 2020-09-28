import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProductFormPresenter } from '../product-form-presenter/product-form.presenter';

@Component({
  selector: 'product-form-presentation-ui',
  templateUrl: './product-form.presentation.html',
  styleUrls: ['./product-form.presentation.scss'],
  viewProviders: [ProductFormPresenter]
})
export class ProductFormPresentation implements OnInit {

  productForm: FormGroup;
  
  constructor(private productFormPresenter: ProductFormPresenter) {

  }

  ngOnInit() {
  }

}
