import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { LoginComponent } from 'src/app/view/login/login.component';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(public LoginService: LoginService) { }
  usuario:string
  pontuacao:number
  estilo:false
  ngOnInit() {
    this.usuario=this.LoginService.user
    this.pontuacao=200

  }
 
  public onSidenavClose = (estilo:boolean) => {
    this.sidenavClose.emit();
    estilo=true
  }
}
