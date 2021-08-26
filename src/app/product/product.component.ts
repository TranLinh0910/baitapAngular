import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product:Product[];
data:Product;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.productService.getProduct().subscribe(data=>{
      this.product=data;
    })
  }
  removeItem(id:number){
    this.productService.removeProduct(id).subscribe(data=>{
      this.product=this.product.filter(item=>item.id!=data.id);
    })
  }

}
