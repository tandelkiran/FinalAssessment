import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

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

  // output event for add product and emit product detail
  @Output() addProduct: EventEmitter<Product>;
  // output event for update product and emit product detail
  @Output() updateProduct: EventEmitter<Product>;
  // event for send id to delete data
  @Output() sendId: EventEmitter<number>;

  public reverse: boolean;
  public fieldName: string;
  // produc list
  private products: Product[];

  constructor(private productListPresenter: ProductListPresenter) {
    this.addProduct = new EventEmitter<Product>();
    this.updateProduct = new EventEmitter<Product>();
    this.sendId = new EventEmitter<number>();
    this.fieldName = 'productName';
    this.reverse = false;
  }

  public ngOnInit(): void {
  }

  /**
   * load product form overay
   * @param productDetail productDetail
   */
  public loadProductForm(productDetail: Product) {

    this.productListPresenter.addFormDetails = new Subject<Product>();
    this.productListPresenter.createProductForm(productDetail);

    this.productListPresenter.addFormDetails.subscribe((formData: Product) => {
      this.addProduct.emit(formData);
    });
  }

  public sortList(fieldName: string) {
    this.fieldName = fieldName;
    this.reverse = !this.reverse
  }

  public removeProduct(id: number) {
    let confirmation = confirm('Are you sure want to delete ?');
    if (confirmation) {
      this.sendId.emit(id);
    }
  }

}
