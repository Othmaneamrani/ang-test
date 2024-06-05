import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit{
  constructor(private service:ProductService, public   router:Router) {
  }
  public products:any = [{}];
ngOnInit() {
  this.getAllProducts();
}

  getAllProducts():any {
  return this.service.getAllProducts().subscribe(
    (resp:any)=>{
      console.log(resp);
      this.products=resp;
    },
    (error:any)=>{
      console.log(error);
    }
  );
}


handleDeleteProduct(id:bigint):any{
  this.service.deleteProductById(id).subscribe(
    (resp:any)=>{
      this.products = this.products.filter((p:any) => p.id !== id);
    },
    (err:any)=>{
      console.log(err);
    }
  );
}


  goToDetails(product: any): void {
    this.router.navigate(['/details'], { state: { product } });
  }


  handleGoToUpdate(product: any): void {
    this.router.navigate(['/update'], { state: { product } });
  }

}
