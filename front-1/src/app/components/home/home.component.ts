import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/shared/services/home.service';
import { LoginService } from 'src/app/shared/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teste',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  
})

export class testeComponent implements OnInit {
  dataSource : any[];
  tabela : any[];
  lista: any[];
  lista_jogadora:any[];
  check:any[];
  Time:any
  ate:number
  pagina:number
  mais_pagina:boolean
  id_time:number
  botao:number
  name_2:string
  name_3:string
  name_4:string
  name_5:string
  name_6:string
  name_7:string
  name_8:string
  jogadora_2:number
  jogadora_3:number
  jogadora_4:number
  jogadora_5:number
  jogadora_6:number
  jogadora_7:number
  jogadora_8:number
  score="score"
  resultsLength = 0;
  columnsToDisplay = ['name', 'price', 'playerPosition'];
  columnsScore=[...this.columnsToDisplay,'ataque','saque','bloqueio','passe']
  columnsToDisplayWithExpand = [...this.columnsScore, 'expand'];
  columnsButton = [...this.columnsToDisplayWithExpand, 'teste'];
  expandedElement:  null;
  id:number
  constructor(private homeService:HomeService,
    public LoginService: LoginService,
    private router: Router,) { }
  ngOnInit(): void {
  
  this.id=3
 this.LoginService.userById(this.id) .subscribe({
  next: result => {
    if(result.team!=null){
      for (let i = 0; i < result.team.players.length; i++) {
        switch (result.team.players[i].playerPosition) {

          case "CENTRAL":
            this.name_5=result.team.players[i].name
            this.jogadora_5=result.team.players[i].id;
            
            break;
          case"PONTEIRO":
            if(this.name_2==null){
              this.name_2=result.team.players[i].name
              this.jogadora_2=result.team.players[i].id;
              
            }else{
              this.name_7=result.team.players[i].name
              this.jogadora_7=result.team.players[i].id;
            
            }
          break;

          case "OPOSTO":
            this.name_3=result.team.players[i].name
            this.jogadora_3=result.team.players[i].id;
          break;

            case"LIBERO":
              if(this.name_4==null){
                this.name_4=result.team.players[i].name
                this.jogadora_4=result.team.players[i].id;
              
              }else{
                this.name_8=result.team.players[i].name
                this.jogadora_8=result.team.players[i].id;
              }
            break;
            case"LEVANTADOR":
              this.name_6=result.team.players[i].name
              this.jogadora_6=result.team.players[i].id;
            break;

        }
        
      }

    }
  }})

this.homeService.listPlayers()
      .subscribe({
        next: result => {
         let lista=[] 
         this.tabela=result 
        for (let i = 1; i <= 5; i++) {
          lista.push(result[i])
        }
        this.dataSource=lista
        this.ate=5
        this.pagina=0
        }
      })
  }
  Frente(n:number){
    this.ate=this.ate+n
    this.pagina=this.pagina + n
    if(this.tabela.length>=this.ate){
      let lista=[] 
      for (let i = this.pagina; i <= this.ate; i++) {
        lista.push(this.tabela[i])
      }
      this.dataSource=lista
      this.mais_pagina=true
    }else{
      let lista=[] 
      for (let i = this.pagina; i < this.tabela.length; i++) {
        lista.push(this.tabela[i]) 
      }
      this.dataSource=lista
      this.mais_pagina=false
      
      
    }
    
  }
  Atras(n:number){
    let lista=[]
    for(let i = this.pagina; i > this.pagina-5; i--){ 
        lista.push(this.tabela[i]) 
    }
    this.dataSource=lista
    this.pagina=this.pagina - n
    this.mais_pagina=true
    console.log(this.pagina);
  }
  Setjogadoras(posição:string, n:number){
    let lista=[]
    for (let i = 0; i < this.tabela.length; i++) {
      if(this.tabela[i].playerPosition==posição){
        lista.push(this.tabela[i])
        
      }
    }
    this.dataSource=lista 
    this.botao=n
    
  }
  clickedRows(row:any){
    switch (this.botao) {
      case 2:
        this.name_2=row.name
        this.jogadora_2=row.id
        break;
      case 3:
        this.name_3=row.name
        this.jogadora_3=row.id
        break
      case 4:
        this.name_4=row.name
        this.jogadora_4=row.id
        break;
      case 5:
        this.name_5=row.name
        this.jogadora_5=row.id;
        break;
      case 6:
        this.name_6=row.name
        this.jogadora_6=row.id;
        break;
      case 7:
        this.name_7=row.name
        this.jogadora_7=row.id;
        break;
      case 8:
        this.name_8=row.name
        this.jogadora_8=row.id;
        break;
      default:
        console.log(`Sorry, we are out of `)
        break
    }
  }
  Salvar_time(){
  this.lista_jogadora=[this.jogadora_2,this.jogadora_3,this.jogadora_4,this.jogadora_5,this.jogadora_6,this.jogadora_7,this.jogadora_8]
  // if(this.jogadora_2!=null && this.jogadora_3!=null && this.jogadora_4!=null && this.jogadora_5!=null && this.jogadora_6!=null && this.jogadora_7!=null &&this.jogadora_8!=null){
    this.LoginService.userById(this.id).subscribe({ 
      next: (retorno:any)=>{
        console.log(retorno);
        if(retorno.team==null){
          Swal.fire({
            title: ' Cadastre de um time',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'save',
            showLoaderOnConfirm: true,
            preConfirm: (time) => {
              this.Time =   {
                "name":`${time}`,
                "user":{
                  "id":`${this.id}`
                }
              }
              return this.homeService.criateteam(this.Time).subscribe({next:(result)=>{	
                return this.LoginService.userById(this.id).subscribe({
                  next:(result)=>{	
                    console.log(result);
                    
                    this.id_time=result.team.id

                  }

                })

                },		
            error: (err) => {
            console.log(err);  
        }
        })
        },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                icon:'success',
                title: 'Time cadastrado',
                text:`As jogadoras que vão ser add no time são: ${this.name_2},${this.name_3},${this.name_4},${this.name_5},${this.name_6},${this.name_7},${this.name_8}`,
                showDenyButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
              }).then((result) => {
                if (result.isConfirmed) {
                  for (let i = 0; i <=this.lista_jogadora.length; i++) {
                    console.log(this.lista_jogadora[i]);
                    
                    this.homeService.altualizarteam(this.lista_jogadora[i],this.id_time).subscribe({
                      next:()=>{
                          Swal.fire('Salvado suas jogadoras', '', 'success')
                      }
                    })
                  }
                  
                } else if (result.isDenied) {
                  Swal.fire('OKKK ! jogadoras não salvas', '', 'error')
                }
              })
            }
          })

        }else{
          this.LoginService.userById(this.id).subscribe({
            next:(result)=>{
              this.id_time=result.team.id
            }
          })
          Swal.fire({
            icon:'success',
            title: 'Time cadastrado',
            text:`As jogadoras que vão ser add no time são: ${this.name_2},${this.name_3},${this.name_4},${this.name_5},${this.name_6},${this.name_7},${this.name_8}`,
            showDenyButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
              // for (let i = 2; i <=this.lista_jogadora.length; i++) {
                console.log(this.lista_jogadora);
                
                this.homeService.altualizarteam(this.jogadora_5,this.id_time).subscribe({
                  next:()=>{
                      Swal.fire('Salvado suas jogadoras', '', 'success')
                  }
                })
              // }
              
            } else if (result.isDenied) {
              Swal.fire('OKKK ! jogadoras não salvas', '', 'error')
            }
          })
        }  
      }
    })
  //  }
  //  else if(this.jogadora_2==null || this.jogadora_3==null || this.jogadora_4==null || this.jogadora_5==null || this.jogadora_6==null || this.jogadora_7==null ||this.jogadora_8==null){
  //   Swal.fire({icon: 'error', title: "Você esqueceu de selecionar uma/umas das jogadora/s!!",text:'Só é possivel jogar se você selecionar um jogadora para cada um das posições'})

  //  }
  // }
  }
 
  public executeSelectedChange = (event :any) => {
    console.log(event);
  }
}
