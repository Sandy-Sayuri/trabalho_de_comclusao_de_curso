import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastreComponent } from './components/cadastro/cadastro.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { testeComponent } from './components/home/home.component';

import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuComponent } from './components/menu/menu.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { MaterialModule } from './material.module';
import { getPaginatorIntl } from './paginator';
import { CadastroService } from './shared/services/cadastro.service';
import { HomeService } from './shared/services/home.service';
import { LoginService } from './shared/services/login.service';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { AuthInterceptor } from './view/login/login.interceptor';
import { Ranking } from './view/ranking/ranking.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent, 
    MenuLateralComponent,
    testeComponent,
    CadastreComponent,
    CadastroComponent,
    Ranking,
    RankingComponent
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
    HomeService,
    CadastroService,
    {provide: MatPaginatorIntl, useValue: getPaginatorIntl()},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
