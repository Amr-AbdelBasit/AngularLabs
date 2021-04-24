import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsWithDiscountComponent } from './components/products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './components/products-without-discount/products-without-discount.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterReactiveFormsComponent } from './components/register-reactive-forms/register-reactive-forms.component';
import { LoginReactiveFormsComponent } from './components/login-reactive-forms/login-reactive-forms.component';
import { NotesComponent } from './components/notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductListComponent,
    CommentComponent,
    PostComponent,
    UserComponent,
    ProductsWithDiscountComponent,
    ProductsWithoutDiscountComponent,
    LoginComponent,
    RegisterComponent,
    RegisterReactiveFormsComponent,
    LoginReactiveFormsComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
