import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/products.service';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: IProduct[] = [];
  errorMsg = "";

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {

    // this.productService.getAllProducts().subscribe(prodData => {
    //   this.productList = prodData;
    // },
    // responseErro => {
    //   this.errorMsg = responseErro;
    // })
  }

}
