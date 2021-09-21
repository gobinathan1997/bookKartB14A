import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productsList: any;
  productListFiltered: any;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProductsList().subscribe(products => {
      this.productsList = products;
      this.productListFiltered = this.productsList;
      console.log(this.productsList)
    });
  }
  filterByTextFn(event: any){
    this.productListFiltered = this.productsList.filter((x: any) =>  x.title.includes(event));
  }

  readFilter(event: any) {
    this.productListFiltered = this.productsList.filter((x : any)=> x.category === event);
  }

}