import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(public LoginService: LoginService,
    private router: Router,) { }
  usuario:string
  // pontuacao:number
  ngOnInit() {
    this.usuario=this.LoginService.user
    
    if(this.usuario== undefined){
      this.router.navigate(['/login'])
    }

  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
