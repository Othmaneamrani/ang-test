import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiAuth:string = "http://localhost:8888/auth";
  private apiProduct:string = "http://localhost:8888/product";


  constructor(private http:HttpClient) { }


  getProductById(id:bigint):any{
    return this.http.get<any>(`${this.apiProduct}/${id}`);
  }


  deleteProductById(id:bigint):any{
    return this.http.delete<any>(`${this.apiProduct}/${id}`);
  }


  getAllProducts():any{
    return this.http.get<any>(this.apiProduct + "/all");
  }



  createProduct(product:any):any{
    return this.http.post<any>(this.apiProduct,product)
  }


  updateProduct(product:any):any{
    return this.http.put<any>(this.apiProduct,product)
  }



  ////////////////////////////////////////////////////


  getUserById(id:bigint):any{
    return this.http.get<any>(`${this.apiAuth}/${id}`);
  }


  login(user:any):any{
    return this.http.post<any>(this.apiAuth+"/login",user)
  }


  sign(user:any):any{
    return this.http.post<any>(this.apiAuth+"/sign",user)
  }


}
