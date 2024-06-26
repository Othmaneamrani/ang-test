import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(public router:Router) {}

isActive(path:string):boolean{
  return this.router.url===path;
}

  logout():any{
    localStorage.clear();
    this.router.navigate(["/"]);
  }


  protected readonly localStorage = localStorage;
}
