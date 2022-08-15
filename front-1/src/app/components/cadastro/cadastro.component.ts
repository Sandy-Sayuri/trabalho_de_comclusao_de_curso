import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastre',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastreComponent implements OnInit {
  formcadastro: FormGroup;
  validacao: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
