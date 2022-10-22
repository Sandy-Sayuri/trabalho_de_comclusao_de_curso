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
  perfil:string
  estilo:false
  time: any
  ngOnInit() {
    this.id=3
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
          this.perfil=retorno.perfis[1]
          console.log(retorno.perfis[1],'perfil');
          
          
        }
      })
    }
  })  
}

editarNome(estilo:boolean){
  this.sidenavClose.emit();
    estilo=true
    Swal.fire({
      title: ' Editar nome seu nome',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'save',
      showLoaderOnConfirm: true,
      preConfirm: (time) => {
        this.time = {
          "name":"pato",
          "email":"teste123@teste.com",
          "password":"123"
      }
        this.MenuService.updateName(this.time,this.id).subscribe({ 
        next: ()=>{
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
          })
          
        }})
        }
      })
}
deleteById(estilo:boolean){
  this.sidenavClose.emit();
  estilo=true
  Swal.fire({
    title: 'Você realmete quer deletar suam conta?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim eu quero'
  }).then((result) => {
    if (result.isConfirmed) {
      this.MenuService.deleteById(this.id).subscribe({ 
        next: ()=>{
           Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
        }})
     
    }
  })

}
teste(estilo:boolean){
  this.sidenavClose.emit();
    estilo=true
    Swal.fire({
      title: ' Editar nome do time',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'save',
      showLoaderOnConfirm: true,
      preConfirm: (time) => {
        this.time = {
          "name":"pato"
      }
        this.LoginService.userById(this.id).subscribe({ next: (retorno:any)=>{
        this.MenuService.updateById(this.time,retorno.team.id).subscribe({ 
        next: ()=>{
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
          })
          
        }})
      }
      })
        }
      })
    
}
 
  public onSidenavClose = (estilo:boolean) => {
    this.sidenavClose.emit();
    estilo=true
  }
}
