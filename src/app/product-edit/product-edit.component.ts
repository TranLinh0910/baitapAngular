import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
product:Product;
  constructor(private productService:ProductService,
    private activateRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(){
   this.getInfo();
  }
  getInfo(){
    this.activateRouter.params.subscribe(params=>{
      this.productService.getInfo(params.id).subscribe(data=>{
        this.product=data;
      })
    })
  }
  onUpdateProduct(){
    this.productService.updateProduct(this.product).subscribe(data=>{
      alert("sua thanh cong");
      this.router.navigateByUrl('/')

    })
  }

}
