import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { HomeService } from 'src/app/shared/services/home.service';
interface Jogadoras {
  id:number
  name: string;
}

/**
 * @title Select in a form
 */
@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})

export class JogadoresComponent implements OnInit{
  JogadoraForm: FormGroup;
  nameForm: FormGroup;
  floatLabelControl = new FormControl();
  Jogadoras:any[]   
  constructor(public  homeService:HomeService) { }

  ngOnInit(): void {
      this.JogadoraForm =  new FormGroup({
      name: new FormControl('', [Validators.required])|| new FormControl<Jogadoras | null>(null, Validators.required),
      preco:new FormControl(null, [Validators.required]),
      altura:new FormControl(null, [Validators.required]),
      largura:new FormControl(null, [Validators.required]),
      date:new FormControl('', [Validators.required]),
      clube:new FormControl('', [Validators.required]),
      titulos:new FormControl('', [Validators.required]),
      ataque:new FormControl('', [Validators.required]),
      bloqueio:new FormControl('', [Validators.required]),
      saque:new FormControl('', [Validators.required]),
      passe:new FormControl('', [Validators.required]),
      playerPosition:new FormControl('', [Validators.required]),
      })
      
      this.dropdowJogadora() 
      
     
  }
  dropdowJogadora(){
    this.homeService.listPlayers().subscribe({
      next: result => {
        let lista=[]
        for (let i = 0; i < result.length; i++) {
          lista.push({"name":`${result[i].name}`,"id":`${result[i].id}`}) 
        }
        this.Jogadoras=lista
      }})

  }
  teste(n:any){
    console.log(n,'oiiiiiiii');
  }
  
}
