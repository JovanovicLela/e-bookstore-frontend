import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GetResponseProducts, Product} from "../models/product";
import {
  FIND_BY_CATEGORY_ID_ENDPOINT,
  GET_PRODUCT_CATEGORY_ENDPOINT,
  GET_PRODUCTS_ENDPOINT,
  SEARCH_ENDPOINT
} from "../app.constants";
import {GetResponseProductCategory, ProductCategory} from "../models/product-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {

    return this.httpClient.get<GetResponseProducts>(FIND_BY_CATEGORY_ID_ENDPOINT + `${theCategoryId}`).pipe(
      map((response: GetResponseProducts) => response._embedded.products)
    );
  }

  getProductListPaginate(thePage: number, thePageSize: number, theCategoryId: number): Observable<GetResponseProducts> {

    return this.httpClient.get<GetResponseProducts>(FIND_BY_CATEGORY_ID_ENDPOINT + `${theCategoryId}` +
      `&page=${thePage}&size=${thePageSize}`);
  }

  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(GET_PRODUCT_CATEGORY_ENDPOINT).pipe(
      map((response: GetResponseProductCategory) => response._embedded.productCategory)
    );

  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(SEARCH_ENDPOINT + `${theKeyword}`).pipe(
      map((response: GetResponseProducts) => response._embedded.products)
    )
  }

  searchProductsPaginate(thePage: number, thePageSize: number, theKeyword: string): Observable<GetResponseProducts> {

    return this.httpClient.get<GetResponseProducts>(SEARCH_ENDPOINT + `${theKeyword}` +
      `&page=${thePage}&size=${thePageSize}`);
  }

  getProduct(theProductId: number): Observable<Product> {
    return this.httpClient.get<Product>(GET_PRODUCTS_ENDPOINT + `${theProductId}`);
  }
}
