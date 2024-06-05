import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{

  public product:any = {};
  constructor(public router:Router,private service:ProductService) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras?.state?.['product'];
  }

  ngOnInit() {
    if (!this.product) {
      this.router.navigate(['/catalogue']);
    }
  }



  handleUpdateProduct(product:any):any{
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
