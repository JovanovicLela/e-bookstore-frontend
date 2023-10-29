import {Product} from "./product";

export class ProductCategory {

  constructor(public id: number, public categoryName: string) {

  }

}

export interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
