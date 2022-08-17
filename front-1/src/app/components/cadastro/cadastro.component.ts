import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastre',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastreComponent implements OnInit {
  nameFormControl = new FormControl('', [Validators.required, Validators.email]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  validacao: boolean = false;
  msgErro: string;
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}
