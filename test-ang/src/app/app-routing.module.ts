import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {AboutComponent} from "./about/about.component";
import {AuthComponent} from "./auth/auth.component";
import {guardAuthGuard} from "./guard/guard-auth.guard";
import {SignComponent} from "./sign/sign.component";
import {nonAuthGuard} from "./guard/non-auth.guard";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {path:'home',component:HomeComponent , canActivate:[guardAuthGuard]},
  {path:'create',component:CreateComponent , canActivate:[guardAuthGuard]},
  {path:'update',component:UpdateComponent , canActivate:[guardAuthGuard]},
  {path:'details',component:DetailsComponent , canActivate:[guardAuthGuard]},
  {path:'catalogue',component:CatalogueComponent , canActivate:[guardAuthGuard]},
  {path:'about',component:AboutComponent , canActivate:[guardAuthGuard]},
  {path:'',component:AuthComponent, canActivate:[nonAuthGuard] },
  {path:'sign',component:SignComponent, canActivate:[nonAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
