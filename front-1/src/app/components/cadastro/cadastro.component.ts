import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Cadastro } from 'src/app/shared/model/cadastro.module';
import { CadastroService } from 'src/app/shared/services/cadastro.service';

import { LoginService } from 'src/app/shared/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastre',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastreComponent implements OnInit {
  cadastroForm: FormGroup;
  Cadastro:any;
  date:any
  nameFormControl = new FormControl('', [Validators.required, Validators.email]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  validacao: boolean = false;
  post:number
  msgErro: string;
  value = 'Clear me';
  constructor(public loginService:LoginService,
              public cadastroService:CadastroService) { }

  ngOnInit(): void {
      Swal.close()
      this.cadastroForm =  new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        name: new FormControl('', [Validators.required]),
        senha:new FormControl('', [Validators.required]),
        senha2:new FormControl('', [Validators.required]),
        date:new FormControl('', [Validators.required]),
      })
  }
 cadastro(cadastro: Cadastro) {
  
  if(cadastro.senha==cadastro.senha2){
    this.date=moment(cadastro.date).format('DDMMYYYY')
    this.loginService.login().subscribe({ 
      next: (retorno:any)=>{
        for (let i = 1; i <= retorno.length; i++)  {
        if(retorno[i].email!=undefined){
            if(retorno[i].email==cadastro.email){ 
                Swal.fire({position: 'top-end',icon: 'error', title: "Já tem uma conta afiliada e esse email",showConfirmButton:false})
              break
            }else{
              this.post=1 
            }
          }
          if(this.post==1){
            this.Cadastro = {
              "email": cadastro.email,
              "name":cadastro.name,
              "birthDate":this.date ,
            }
            this.cadastroService.cadastro(this.Cadastro).subscribe({
              next: (() => {

              })
            })
          }
        }  

      }})
  }
  else{
    this.msgErro='as senhas não são iguais'
  }
 }

}
