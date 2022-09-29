import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/shared/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor( public cadastroService:CadastroService) { }

  ngOnInit(): void {
  }

}
