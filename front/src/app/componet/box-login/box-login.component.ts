import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../shared/model/user.module';
import { LoginService } from '../../shared/services/login.service';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-box-login',
  templateUrl: './box-login.component.html',
  styleUrls: ['./box-login.component.css']
})
export class BoxLoginComponent implements OnInit {
  loginForm: FormGroup
  redirectTo: string
  validacao: boolean = false
  hideSenha:boolean = true
  msgErro: string
  constructor(public loginService: LoginService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    Swal.close()
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      conected: this.fb.control(''),
    })
    this.redirectTo = this.activatedRoute.snapshot.params['to'] || btoa('dashboard/home')
  }
  login(usuario: Usuario) {
    let login = this.loginService.login(usuario).subscribe({ 
      next: (retorno:any)=>{      
        if(retorno["errors"] != undefined){
          this.validacao = true
        } else {
          if(retorno["tipo"] == 2){
            this.msgErro = "Usuário sem acesso!"
            this.validacao = true
          } else {
            localStorage.setItem(`${environment.STORAGE_NAME}:Token`, JSON.stringify(retorno.access_token))
            // this.loginService.refresh()          
            this.router.navigate(['dashboard'])
          }
        }
      }, 
      error: ()=>{
        this.msgErro = "Usuário ou senha inválida!"
        this.validacao = true
        console.log("error") 
      }, 
      complete: ()=>{ 
        login.unsubscribe()  
      }
    })
  }
}
