import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastreComponent } from './components/cadastro/cadastro.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { testeComponent } from './components/home/home.component';
import { JogadoresComponent } from './components/jogadores/jogadores.component';

import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuComponent } from './components/menu/menu.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { SenhaComponent } from './components/senha/senha.component';
import { UserComponent } from './components/user/user.component';
import { MaterialModule } from './material.module';
import { CadastroService } from './shared/services/cadastro.service';
import { HomeService } from './shared/services/home.service';
import { JogadoresService } from './shared/services/jogadores.service';
import { LoginService } from './shared/services/login.service';
import { MenuService } from './shared/services/menu.service';
import { RankingService } from './shared/services/ranking.service ';
import { SenhaService } from './shared/services/senha.service';
import { UsersService } from './shared/services/users.service';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { JogadorComponent } from './view/jogador/jogador.component';
import { LoginComponent } from './view/login/login.component';
import { AuthInterceptor } from './view/login/login.interceptor';
import { Ranking } from './view/ranking/ranking.component';
import { SenhasComponent } from './view/senhas/senhas.component';
import { UsersComponent } from './view/users/users.component';




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
    RankingComponent,
    UsersComponent,
    UserComponent,
    JogadoresComponent,
    JogadorComponent,
    SenhaComponent,
    SenhasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MaterialModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ToastrModule.forRoot()
  ],
  providers: [ LoginService,
    HomeService,
    CadastroService,
    MenuService,
    UsersService,
    JogadoresService,
    SenhaService,
    RankingService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
