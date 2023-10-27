import { environment } from "src/environments/environment";
export let apiUrl: string = environment.postApi;

export const GET_PRODUCTS_ENDPOINT = apiUrl + "api/products";
export const GET_PRODUCT_CATEGORY_ENDPOINT = apiUrl + "api/product-category";

