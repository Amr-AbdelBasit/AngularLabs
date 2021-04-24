import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginReactiveFormsComponent } from '../components/login-reactive-forms/login-reactive-forms.component';
import { LoginComponent } from '../components/login/login.component';
import { NotesComponent } from '../components/notes/notes.component';
import { PostComponent } from '../components/post/post.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductsWithDiscountComponent } from '../components/products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from '../components/products-without-discount/products-without-discount.component';
import { ProductsComponent } from '../components/products/products.component';
import { RegisterReactiveFormsComponent } from '../components/register-reactive-forms/register-reactive-forms.component';
import { RegisterComponent } from '../components/register/register.component';
import { UserComponent } from '../components/user/user.component';

const routes: Routes = [
  // {path: '', redirectTo: '/products', pathMatch: 'full'},
  // {path: 'products', component: ProductListComponent},
  // {path: 'posts', component: ProductListComponent},
  // {path: 'users', component: ProductListComponent}

  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent,
  children:[
    {path:'productWithDiscount', component: ProductsWithDiscountComponent},
    {path:'productWithoutDiscount', component: ProductsWithoutDiscountComponent}
  ]},
  {path: 'posts', component: PostComponent},
  {path: 'users', component: UserComponent},
  {path:'login' , component: LoginComponent} ,
  {path:'register' , component: RegisterComponent} ,
  {path:'login-reactive' , component: LoginReactiveFormsComponent},
  {path:'register-reactive' , component: RegisterReactiveFormsComponent},
  {path:'notes' , component: NotesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
