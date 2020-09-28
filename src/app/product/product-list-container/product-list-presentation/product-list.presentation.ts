import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductListPresenter } from '../product-list-presenter/product-list.presenter';

@Component({
  selector: 'product-list-presentation-ui',
  templateUrl: './product-list.presentation.html',
  styleUrls: ['./product-list.presentation.scss'],
  viewProviders: [ProductListPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListPresentation implements OnInit {

  /**
   * product list getter/setter
   */
  @Input() public set productList(productList: Product[]) {
    this.products = productList;
  }
  public get productList(): Product[] {
    return this.products;
  }

  // produc list
  private products: Product[];

  constructor(private productListPresenter: ProductListPresenter) { }

  public ngOnInit(): void {
  }

  /**
   * load product form overay
   * @param productDetail productDetail
   */
  public loadProductForm(productDetail: Product) {
    this.productListPresenter.createProductForm();
  }

}
