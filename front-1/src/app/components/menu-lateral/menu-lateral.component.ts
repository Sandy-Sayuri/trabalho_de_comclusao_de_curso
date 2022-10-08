import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login.service';
import { LoginComponent } from 'src/app/view/login/login.component';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  usuario:string
  pontuacao:number
  constructor(public LoginService: LoginService,
    private router: Router,) { }
  id:number
  estilo:false
  ngOnInit() {
    this.id=this.LoginService.dados
    if(this.id==undefined){
      this.router.navigateByUrl('/login')
    }else{
      this.LoginService.users(this.id).subscribe({ 
        next: (retorno:any)=>{
          this.usuario=retorno.name
          this.pontuacao=retorno.team.total
        }
      })
     
    }
    
  }

 
  public onSidenavClose = (estilo:boolean) => {
    this.sidenavClose.emit();
    estilo=true
  }
}
