import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { IProduct } from './models/IProduct';

@Component({
  selector: 'myfirstapp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularLab';
  productList: IProduct[] = [];
  clicked: boolean = false;

  // imgPath: string = "https://dotnettutorials.net/wp-content/uploads/2019/09/cropped-dotnettutorials.png";


  constructor() {}
  @ViewChild(ProductsComponent) prodCom: ProductsComponent;


  DisplayAllProducts() {
    this.productList = this.prodCom.renderValues();
    this.clicked = !this.clicked;
  }
}
