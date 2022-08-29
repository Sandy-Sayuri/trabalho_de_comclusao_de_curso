import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './components/ranking/ranking.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'ranking',component:RankingComponent},
  {path:'cadastro',component:CadastroComponent},
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