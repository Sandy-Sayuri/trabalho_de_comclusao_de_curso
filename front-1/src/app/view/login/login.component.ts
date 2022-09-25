import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/user.module';
import { LoginService } from 'src/app/shared/services/login.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  tabela : any[];
  redirectTo: string;
  validacao: boolean = false;
  hideSenha:boolean = true;
  msgErro: string;
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
    this.loginService.username(usuario)
    let login = this.loginService.login(usuario).subscribe({ 
      next: (retorno:any)=>{ 
        this.tabela=retorno
        for (let i = 0; i < retorno.length; i++) {
            this.msgErro=''
          if(retorno[i].email==usuario.username && retorno[i].password==usuario.password){ 
            this.router.navigate(['home'])
            break
          }
          if(retorno[i].email!=usuario.username && retorno[i].password==usuario.password){
            this.msgErro = "Email Incorreto!"
            
          }
          if(retorno[i].email==usuario.username && retorno[i].password!=usuario.password){
            this.msgErro = "Senha Incorreta!"
            
          }
          else{
            this.msgErro = "Usuário não exite!"
          }
        } 
      }
    })
  }
  Users(usuario: Usuario){
    this.loginService.username(usuario)
  }
}
