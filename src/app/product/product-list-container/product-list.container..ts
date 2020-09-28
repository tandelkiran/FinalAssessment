import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product-list-container',
  templateUrl: './product-list.container.html',
  styleUrls: ['./product-list.container.scss'],
  viewProviders: [ProductService],
})
export class ProductListContainer implements OnInit {

  // observable for product list
  public products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.products$ = new Observable<Product[]>();
  }

  ngOnInit() {
    this.getProducts();
  }

  /**
   * add product call
   * @param productDetail product detail
   */
  public addProject(productDetail: Product): void {
    this.productService.addProduct(productDetail).subscribe(() => {
      alert('Added...!!!');
      this.getProducts();
    }
    );
  }

  /**
   * remove product
   * @param id product id
   */
  public removeProduct(id: number): void {
    this.productService.removeProduct(id).subscribe(() => {
      alert('Deleted...!!!');
      this.getProducts();
    }
    );
  }

  /**
   * get products
   */
  private getProducts(): void {
    this.products$ = this.productService.getProducts();
  }
}
