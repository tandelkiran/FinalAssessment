import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  // base url for json data source
  private _baseUrl: string; // http://localhost:3000

  constructor(private httpClient: HttpClient) {
    this._baseUrl = environment.baseUrl;
  }

  /**
   * get product list
   */
  public getProducts(): Observable<Product[]> {
    const url = `${this._baseUrl}/products`;
    return this.httpClient.get<Product[]>(url);
  }

  /**
   * get single product
   * @param id product id
   */
  public getProduct(id: number): Observable<Product> {
    const url = `${this._baseUrl}/products/${id}`;
    return this.httpClient.get<Product>(url);
  }

  /**
   * add product
   * @param productDetail product detail
   */
  public addProduct(productDetail: Product): Observable<Product> {
    const url = `${this._baseUrl}/products`;
    return this.httpClient.post<Product>(url, productDetail);
  }

  /**
   * update product
   * @param productDetail product detail
   */
  public updateProduct(productDetail: Product): Observable<Product> {
    let id = productDetail.id;
    const url = `${this._baseUrl}/products/${id}`;
    return this.httpClient.put<Product>(url, productDetail);
  }
  /**
   * remove product
   * @param id product id
   */
  public removeProduct(id: number): Observable<Product> {
    const url = `${this._baseUrl}/products/${id}`;
    return this.httpClient.delete<Product>(url);
  }

}
