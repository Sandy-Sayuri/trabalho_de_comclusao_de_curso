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
      username: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
      conected: this.fb.control(''),
    })
    this.redirectTo = this.activatedRoute.snapshot.params['to'] || btoa('dashboard/home')
    
  }
  login(usuario: Usuario) {
    let login = this.loginService.login().subscribe({ 
      next: (retorno:any)=>{  
        console.log(retorno,'teste');
        for (let i = 0; i < retorno.length; i++)  {
          console.log(retorno.length);
          
          this.loginService.users(retorno[i].id).subscribe({ 
              next: (retorno:any)=>{
            if(retorno.email==usuario.username && retorno.password==usuario.password){ 
              this.loginService.username(retorno)
              this.router.navigate(['home'])
            }
            if(retorno.email!=usuario.username && retorno.password==usuario.password){
              Swal.fire({icon: 'error', title: "Email Incorreto!"})
              
            }
            if(retorno.email==usuario.username && retorno.password!=usuario.password){
              Swal.fire({icon: 'error', title: "Senha Incorreta!"})
            }
            else{
              Swal.fire({icon: 'error', title: "Usuário não exite!"})
            }
          }
        })
      }
    }
  })
}
  Users(usuario: Usuario){
    this.loginService.username(usuario)
  }
}
