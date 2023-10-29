import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GetResponseProducts, Product} from "../models/product";
import {FIND_BY_CATEGORY_ID_ENDPOINT, GET_PRODUCT_CATEGORY_ENDPOINT} from "../app.constants";
import {GetResponseProductCategory, ProductCategory} from "../models/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductList(categoryId: number): Observable<Product[]> {

    return this.httpClient.get<GetResponseProducts>(FIND_BY_CATEGORY_ID_ENDPOINT + `${categoryId}`).pipe(

      map((response: GetResponseProducts) => response._embedded.products)
    );
  }

  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(GET_PRODUCT_CATEGORY_ENDPOINT).pipe(
      map((response: GetResponseProductCategory) => response._embedded.productCategory)
    );

  }
}
