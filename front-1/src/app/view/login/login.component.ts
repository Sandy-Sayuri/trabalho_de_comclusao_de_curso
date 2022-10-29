import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/user.module';
import { LoginService } from 'src/app/shared/services/login.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import jwt_decode from "jwt-decode";

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
  decoded:any
  constructor(public loginService: LoginService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    Swal.close()
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    })
  }
  login(usuario: Usuario) {
    let login = this.loginService.login(usuario).subscribe({ 
      next: (retorno)=>{ 
        console.log(retorno);
            localStorage.setItem(`${environment.STORAGE_NAME}:Token`, retorno.token)
            let token = localStorage.getItem(`${environment.STORAGE_NAME}:Token`)
            if(token){
            this.router.navigate(['/home'])
          }
      }, 
      error: ()=>{
        this.msgErro = "Usuário ou senha inválida!"
        this.router.navigate(['/login'])
        localStorage.clear();
        console.log("error") 
      }, 
      complete: ()=>{ 
        login.unsubscribe()  
      }
    })
  }
}