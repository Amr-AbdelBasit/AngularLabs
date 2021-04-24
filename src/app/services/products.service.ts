import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { ProductsController } from '../APIs/ProductsController';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  url = ProductsController.GetAllProducts;

  // getAllProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(this.url).pipe(catchError((err) => {
  //     return throwError(err.message || 'Please try again');
  //   }))
  // }

  // getProductById(productID: number) {
  //   let existProduct = this.getAllProducts().find(p => p.ID == productID)

  //   if(typeof productID != 'number' && existProduct == null) return null;
  //   else return existProduct;
  // }

  getAllProducts(): IProduct[] {
    return [ 
      {"id": 1, "name": "Product1", "quantity": 500, "price": 100, "img": "../../assets/products-imgs/P1.webp"},
      {"id": 2, "name": "Product2", "quantity": 200, "price": 200, "img": "../../assets/products-imgs/P2.png"},
      {"id": 3, "name": "Product3", "quantity": 300, "price": 300, "img": "../../assets/products-imgs/P3.jpg"}
  ]
  }

  getAllCategories() {
    return [
        {ID: 1, Name: "Category1"},
        {ID: 2, Name: "Category2"},
        {ID: 3, Name: "Category3"}
    ];
  }
}
