export class Product {

  constructor(public id: number, public sku: string, public name: string, public description: string,
              public unitPrice: number, public imageUrl: string, public active: boolean,
              public unitsInStock: number, public dateCreated: Date, public lastUpdated: Date) {

  }

}


export interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
