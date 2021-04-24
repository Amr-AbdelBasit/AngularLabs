import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/IProduct'
import { ICategory } from '../../models/ICategory';
import { DiscountOffers } from '../../models/DiscountOffers_Enum';
import { Observable } from 'rxjs';
import { ProductServiceService } from '../../services/products.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  discount: DiscountOffers = DiscountOffers._10;
  storeName: string = "Test Store Name";
  storeLogo: string = '../../assets/Logo.jpg';
  productList: IProduct[] = [];
  categoryList: ICategory[] = [];
 
  clinetName = "Amr Elsharif";
  isPurchased: boolean = false;

  toggleIsPurchase() {
    this.isPurchased = !this.isPurchased;
  }


  constructor(
    private productService: ProductServiceService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) {
    this.productList = this.productService.getAllProducts();
    
   }

  ngOnInit(): void {
  }

  renderValues() {
    this.productList = this.productService.getAllProducts();
    // this.categoryList = this.productService.getAllCategories();

    return this.productList;
  }

  Toggle()
  {
    this.isPurchased = !this.isPurchased;
  }

  goToProductWithDiscount() {
    console.log(this.router.navigate(['productWithDiscount'],{relativeTo:this.activatedRoute}));
     
    console.log(this.activatedRoute.url)
    
  }

  goToProductWithoutDiscount(){
    this.router.navigate(['productWithoutDiscount'],{relativeTo:this.activatedRoute})
  }


  // applyClasses: string = 'colorClass';
  // colorClass: boolean = false;

}
