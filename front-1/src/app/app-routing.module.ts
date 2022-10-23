import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { JogadorComponent } from './view/jogador/jogador.component';
import { LoginComponent } from './view/login/login.component';
import { Ranking } from './view/ranking/ranking.component';
import { SenhasComponent } from './view/senhas/senhas.component';
import { UsersComponent } from './view/users/users.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'senha',component:SenhasComponent},
  {path:'ranking',component:Ranking},
  {path:'cadastro',component:CadastroComponent},
  {path:'usuario',component:UsersComponent},
  {path:'jogadora',component:JogadorComponent},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }