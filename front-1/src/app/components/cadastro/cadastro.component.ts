import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Cadastro } from 'src/app/shared/model/cadastro.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastre',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastreComponent implements OnInit {
  cadastroForm: FormGroup;
  date:any
  nameFormControl = new FormControl('', [Validators.required, Validators.email]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  validacao: boolean = false;
  msgErro: string;
  value = 'Clear me';
  constructor() { }

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
  console.log(cadastro)
  console.log(moment(cadastro.date).format('DD-MM-YYYY'));
  
 }

}
