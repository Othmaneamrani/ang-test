import { Component } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
  public user: any = {};

  constructor(private service: ProductService, private router: Router) {
  }

  handleSign(user: any): any {
    this.service.sign(user).subscribe(
      (resp: any) => {
        if(user.confirmPassword !== user.password){
          alert("Confirmation de password incorrecte.");
          return;
        }
        if (resp) {
          localStorage.setItem("id", resp.id);
          localStorage.setItem("username", resp.username);
          localStorage.setItem("log", "true");
          this.router.navigate(['/home']);
        }
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
