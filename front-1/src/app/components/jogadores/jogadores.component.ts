import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import * as moment from 'moment';
import { Jogadora } from 'src/app/shared/model/jogadora.model';
import { HomeService } from 'src/app/shared/services/home.service';
import { JogadoresService } from 'src/app/shared/services/jogadores.service';
import Swal from 'sweetalert2';
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
  objectSave:any  
  scoreSave:any 
  constructor(public  homeService:HomeService, public jogadoresService:JogadoresService) { }

  ngOnInit(): void {
    
      this.JogadoraForm =  new FormGroup({
      name: new FormControl('', [Validators.required])|| new FormControl<Jogadoras | null>(null, Validators.required),
      preco:new FormControl(null, [Validators.required]),
      altura:new FormControl(null, [Validators.required]),
      largura:new FormControl(null, [Validators.required]),
      date:new FormControl(null, [Validators.required]),
      clube:new FormControl(null, [Validators.required]),
      titulos:new FormControl(null, [Validators.required]),
      ataque:new FormControl(null, [Validators.required]),
      bloqueio:new FormControl(null, [Validators.required]),
      saque:new FormControl(null, [Validators.required]),
      passe:new FormControl(null, [Validators.required]),
      playerPosition:new FormControl(null, [Validators.required]),
      })
      
      this.dropdowJogadora() 
      
     
  }
  dropdowJogadora(){
    this.homeService.listPlayers().subscribe({
      next: result => {
        let lista=[]
        for (let i = 0; i < result.length; i++) {
          lista.push({"name":`${result[i].name}`,"id":result[i].id}) 
        }
        this.Jogadoras=lista
      }})

  }
  teste(n:any){
    this.jogadoresService.pegarJogadora(n.id).subscribe({
      next: (result:any)=> {
        this.JogadoraForm.patchValue({
          "preco": result.price,
          "altura":result.height,
          "largura":result.weight,
          "date":new Date(result.birthDate),
          "clube":result.clube,
          "titulos":result.titulos,
          "ataque":result.score.ataque,
          "bloqueio":result.score.bloqueio,
          "saque":result.score.saque,
          "passe":result.score.passe,
          "playerPosition":result.playerPosition,
      })
      }
    })
    
  }
  salvar(jogadoras:Jogadora,lugar:any){
    if(lugar=='1'){
      this.scoreSave={
          "saque": jogadoras.saque,
          "bloqueio":jogadoras.bloqueio,
          "ataque": jogadoras.ataque,
          "passe":jogadoras.passe
      }
      this.jogadoresService.colocarScore(this.scoreSave).subscribe({
        next: (result:any)=> {
          console.log(result);
          
        }})
      this.objectSave = {
          "name": `${jogadoras.name}`,
          "price": jogadoras.preco,
          "height": jogadoras.altura,
          "weight": jogadoras.largura,
          "birthDate": `${moment(jogadoras.date).format('DD/MM/YYYY')}`,
          "clubes": `${jogadoras.clube}`,
          "titulos": `${jogadoras.titulos}`,
          "score": {
              "id": 7,
              "saque": 20.0,
              "bloqueio": 15.1,
              "ataque": 14.5,
              "passe": 9.4
          },
          "playerPosition": "LIBERO"
      }
      this.jogadoresService.colocarJogadora(this.objectSave).subscribe({
        next: (result:any)=> {
          console.log(result);
          Swal.fire({
            icon: 'success',
            title: 'Time salvo',
            showConfirmButton: false,
            timer: 1500
          })
          
        }
      })
    } if(lugar=='2'){
      this.scoreSave={
        "saque": jogadoras.saque,
        "bloqueio":jogadoras.bloqueio,
        "ataque": jogadoras.ataque,
        "passe":jogadoras.passe
    }
    this.jogadoresService.colocarScore(this.scoreSave,).subscribe({
      next: (result:any)=> {
        console.log(result);
        
      }})
    this.objectSave = {
        "name": `${jogadoras.name}`,
        "price": jogadoras.preco,
        "height": jogadoras.altura,
        "weight": jogadoras.largura,
        "birthDate": `${moment(jogadoras.date).format('DD/MM/YYYY')}`,
        "clubes": `${jogadoras.clube}`,
        "titulos": `${jogadoras.titulos}`,
        "score": {
            "id": 7,
            "saque": 20.0,
            "bloqueio": 15.1,
            "ataque": 14.5,
            "passe": 9.4
        },
        "playerPosition": "LIBERO"
    }
    this.jogadoresService.colocarJogadora(this.objectSave).subscribe({
      next: (result:any)=> {
        console.log(result);
        Swal.fire({
          icon: 'success',
          title: 'Time salvo',
          showConfirmButton: false,
          timer: 1500
        })
        
      }
    })


    }
  }
}
  
