import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GetResponse, Product} from "../models/Product";
import {GET_PRODUCTS_ENDPOINT} from "../app.constants";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(GET_PRODUCTS_ENDPOINT).pipe(
      map((response: GetResponse) => response._embedded.products)
    );
  }
}
