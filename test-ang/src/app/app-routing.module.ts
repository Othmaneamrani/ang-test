import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {AboutComponent} from "./about/about.component";
import {AuthComponent} from "./auth/auth.component";
import {guardAuthGuard} from "./guard/guard-auth.guard";
import {SignComponent} from "./sign/sign.component";

const routes: Routes = [
  {path:'home',component:HomeComponent , canActivate:[guardAuthGuard]},
  {path:'catalogue',component:CatalogueComponent , canActivate:[guardAuthGuard]},
  {path:'about',component:AboutComponent , canActivate:[guardAuthGuard]},
  {path:'',component:AuthComponent},
  {path:'sign',component:SignComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
