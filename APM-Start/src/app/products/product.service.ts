import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ProductService {
  productUrl: string = './api/products/products.json';
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http
      .get<IProduct[]>(this.productUrl)
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<IProduct> {
    return this._http
      .get<IProduct[]>(this.productUrl)
      .flatMap(p => p)
      .single(p => p.productId === id);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
