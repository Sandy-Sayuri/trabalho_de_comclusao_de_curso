import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Usuario } from 'src/app/shared/model/user.module';
import { LoginService } from 'src/app/shared/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  redirectTo: string;
  validacao: boolean = false;
  hideSenha:boolean = true;
  msgErro: string;
  constructor(public loginService: LoginService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private headerComponent:HeaderComponent,
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
    // this.loginService.username(usuario)
    let login = this.loginService.login(usuario).subscribe({ 
      next: (retorno:any)=>{   
        console.log(retorno,'retorno');
        if(retorno["errors"] != undefined){
          this.validacao = true
        } else {
          if(retorno["tipo"] == 2){
            this.msgErro = "Usuário sem acesso!"
            this.validacao = true
          } else {
            localStorage.setItem(`Supermaket:Token`, JSON.stringify(retorno.access_token))
            this.router.navigate(['home'])
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
  Users(usuario: Usuario){
    this.loginService.username(usuario)
  }
}
