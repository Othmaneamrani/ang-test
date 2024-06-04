import { Component } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  public user : any = {};
constructor(private service:ProductService, private router:Router) {}

  handleLogin(user:any):any{
    this.service.login(user).subscribe(
      (resp:any) => {
        if(resp){
          localStorage.setItem("id",resp.id);
          localStorage.setItem("username",resp.username);
          localStorage.setItem("log","true");
          this.router.navigate(['/home']);
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )


  }

}
