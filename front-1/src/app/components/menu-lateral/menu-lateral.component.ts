import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login.service';
import { MenuService } from 'src/app/shared/services/menu.service';
import { loadingReducer } from 'src/app/store/loading/loading.reducer';
import { LoginComponent } from 'src/app/view/login/login.component';
import Swal from 'sweetalert2';

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
    private router: Router,
    public MenuService:MenuService,) { }
  id:number
  estilo:false
  time: any
  ngOnInit() {
    this.id=84
  this.LoginService.userByName().then((res:any) => {
  console.log(res,'teste');
 
    if(this.id==undefined){
      this.router.navigateByUrl('/login')
    }else{
      this.LoginService.userById(this.id).subscribe({ 
        next: (retorno:any)=>{
          if(retorno.team !=null){
            this.pontuacao=retorno.team.total
            this.time=retorno.team.name
          }
          this.usuario=retorno.name
          
        }
      })
    }
})
 
    
  }
teste(estilo:boolean){
  this.sidenavClose.emit();
    estilo=true
    Swal.fire({
      title: ' Cadastre de um time',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'save',
      showLoaderOnConfirm: true,
      preConfirm: (time) => {
        this.time = {"name":`${time}`}
        this.MenuService.updateById(this.time).subscribe({ 
        next: (retorno:any)=>{
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
          })
          
        }})
        }
      })
    
}
 
  public onSidenavClose = (estilo:boolean) => {
    this.sidenavClose.emit();
    estilo=true
  }
}
