import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxLoginComponent } from './componet/box-login/box-login.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
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
