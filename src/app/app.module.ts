import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookComponent } from './components/book/book.component';
import { HeadersInterceptor } from './shared/header.interceptor';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductFiltersComponent } from './components/products/product-filters/product-filters.component';
import { ProductModule } from './components/products/product.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ProductCardComponent,
    ProductsListComponent,
    ProductFiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,

    ReactiveFormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
