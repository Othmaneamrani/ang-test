import { Component } from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
constructor(private service:ProductService) {}

  handleLogin(user:any):any{
    const resp = this.service.login(user);
    if(resp.data){
      localStorage.setItem("id",resp.data.id);
      localStorage.setItem("username",resp.data.username);
      localStorage.setItem("log","true");
    }
  }

}
