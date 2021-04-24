import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-products-without-discount',
  templateUrl: './products-without-discount.component.html',
  styleUrls: ['./products-without-discount.component.scss']
})
export class ProductsWithoutDiscountComponent implements OnInit {


  productList: IProduct[] = [
    {id:3, name:"Product3", quantity:23, price:55, img:"../../assets/products-imgs/P1.webp"},
    {id:4, name:"Product4", quantity:45, price:76, img:"../../assets/products-imgs/P2.png"},
    {id:5, name:"Product5", quantity:78, price:25, img:"../../assets/products-imgs/P3.jpg"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
