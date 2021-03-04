import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = []
  constructor() { 
    this.products=[
      new Product(101,'name1',40001,'brand1'),
      new Product(102,'name2',40002,'brand1'),
      new Product(103,'name3',40003,'brand2'),
      new Product(104,'name4',40004,'brand2'),
      new Product(105,'name5',40005,'brand3'),
      new Product(106,'name6',40006,'brand3'),
    ]
   }

    getProdutsByBrand( brandName:string ){
      var selectedProducts:Product[]=[]
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].brand == brandName ) {
          selectedProducts.push(this.products[i])
        }
      }
      return selectedProducts
    }

}
