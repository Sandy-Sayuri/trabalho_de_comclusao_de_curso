import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { HomeService } from 'src/app/shared/services/home.service';
interface Jogadoras {
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
  floatLabelControl = new FormControl();
  Jogadoras:any[]   
  constructor(public  homeService:HomeService,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.JogadoraForm =  new FormGroup({
      floatLabelControl : new FormControl(''),
      name: new FormControl('', [Validators.required])|| new FormControl<Jogadoras | null>(null, Validators.required),
      })
      this.dropdowJogadora() 
  }
  dropdowJogadora(){
    console.log(this.JogadoraForm);
    
    this.homeService.listPlayers().subscribe({
      next: result => {
        let lista=[]
        for (let i = 0; i < result.length; i++) {
          lista.push({"name":`${result[i].name}`}) 
        }
        this.Jogadoras=lista
      }})

  }
}
