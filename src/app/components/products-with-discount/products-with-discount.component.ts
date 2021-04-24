import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-products-with-discount',
  templateUrl: './products-with-discount.component.html',
  styleUrls: ['./products-with-discount.component.scss']
})
export class ProductsWithDiscountComponent implements OnInit {

  productList: IProduct[] = [
    {id:1, name:"Product1", quantity:44, price:33, img: "../../assets/products-imgs/P1.webp"},
    {id:2, name:"Product2", quantity:50, price:44, img:"../../assets/products-imgs/P2.png"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
