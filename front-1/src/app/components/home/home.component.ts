import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
import { LoginService } from 'src/app/shared/services/login.service';

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
  check:any[];
  botão:number
  name_2:string
  name_3:string
  name_4:string
  name_5:string
  name_6:string
  name_7:string
  name_8:string
  jogadora_2:string
  jogadora_3:string
  jogadora_4:string
  jogadora_5:string
  jogadora_6:string
  jogadora_7:string
  jogadora_8:string
  score="score"
  columnsToDisplay = ['name', 'price', 'playerPosition'];
  columnsScore=[...this.columnsToDisplay,'ataque','saque','bloqueio','passe']
  columnsToDisplayWithExpand = [...this.columnsScore, 'expand'];
  columnsButton = [...this.columnsToDisplayWithExpand, 'teste'];
  expandedElement:  null;
  id:number
  constructor(private homeService:HomeService,
    public LoginService: LoginService) { }

  ngOnInit(): void {
    this.id=this.LoginService.dados
    this.homeService.listPlayers()
      .subscribe({
        next: result => {
          this.dataSource=result
          this.tabela=result
          
        }
      })
  }
  
  Setjogadoras(posição:string, n:number){
    let lista=[]
    console.log(posição,n);
    
    for (let i = 0; i < this.tabela.length; i++) {
      if(this.tabela[i].playerPosition==posição){
        lista.push(this.tabela[i])
        
      }
    }
    this.dataSource=lista 
    this.botão=n
    
  }
  clickedRows(row:any){
    switch (this.botão) {
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
 
  public executeSelectedChange = (event :any) => {
    console.log(event);
  }
}
