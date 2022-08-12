import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { testeComponent } from './components/home/home.component';

import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './material.module';
import { getPaginatorIntl } from './paginator';
import { LoginService } from './shared/services/login.service';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent, 
    MenuLateralComponent,
    testeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ToastrModule.forRoot()
  ],
  providers: [ LoginService,
    {provide: MatPaginatorIntl, useValue: getPaginatorIntl()}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }