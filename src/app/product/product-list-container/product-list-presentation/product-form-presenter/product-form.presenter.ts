import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { strictEqual } from 'assert';

@Injectable()
export class ProductFormPresenter {

  constructor(
    private formBuilder: FormBuilder
  ) { }
  productForm: FormGroup;
  public buildProducForm(): FormGroup {
    return this.productForm = this.formBuilder.group(
      {
        id: [null],
        image: [''],
        productName: [''],
        description: [''],
        price: [''],
        quantity: ['']
      }
    );
  }
}
