import { TestBed } from '@angular/core/testing';

import { ProductFormPresenter } from './product-form.presenter';

describe('ProductFormPresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductFormPresenter = TestBed.get(ProductFormPresenter);
    expect(service).toBeTruthy();
  });
});
