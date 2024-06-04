import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    DetailsComponent,
    NavbarComponent,
    FooterComponent,
    CatalogueComponent,
    AboutComponent,
    AuthComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
