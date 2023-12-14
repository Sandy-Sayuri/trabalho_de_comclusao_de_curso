import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { LoginComponent } from './view/login/login.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  // {path:'home',component:HomeComponent},
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