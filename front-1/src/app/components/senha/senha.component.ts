import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Senha } from 'src/app/shared/model/senha.module';
import { SenhaService } from 'src/app/shared/services/senha.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css']
})
export class SenhaComponent implements OnInit {
  senhaForm: FormGroup;
  constructor(private senhaService:SenhaService) { }

  ngOnInit(): void {
    this.senhaForm =  new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }  
  enviar(senha:Senha){
    this.senhaService.senha(senha).subscribe({
      next:(()=>{	
        Swal.fire({
        icon: 'success',
        title: 'Mandamos uma senha provisoria no seu emai ',
        showConfirmButton: true,   
        })
      }), error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: 'Algo deu errado !!!',
          text:`${err.error}`,
          showConfirmButton: true,   
          })
      
      }
    })
    
    
  }

}
