import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  public product:any = {};
  constructor(public router:Router,private service:ProductService) {
  }

  handleCreateProduct(product:any):any{
    this.service.createProduct(product).subscribe(
      (resp:any)=>{
        this.router.navigate(['/catalogue']);
      },
      (err:any)=>{
        console.log(err);
      }
    );
  }


}
