import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

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
  name_5:string
  score="score"
  columnsToDisplay = ['name', 'price', 'playerPosition'];
  columnsScore=[...this.columnsToDisplay,'ataque','saque','bloqueio','passe']
  columnsToDisplayWithExpand = [...this.columnsScore, 'expand'];
  columnsButton = [...this.columnsToDisplayWithExpand, 'teste'];
  expandedElement:  null;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    
    this.homeService.listPlayers()
      .subscribe({
        next: result => {
          this.dataSource=result
          this.tabela=result
          console.log(this.dataSource[0].score.saque);
          
        }
      })
      
    
  }
  
  Setjogadoras(posição:string, n:number){
    let lista=[]
    console.log(posição,n);
    
    for (let i = 0; i < this.tabela.length; i++) {
      if(this.tabela[i].playerPosition==posição){
        lista.push(this.tabela[i])
        console.log(lista, 'lista');
        
      }
    }
    this.dataSource=lista 
    this.botão=n
    
  }
  clickedRows(row:any){
    switch (this.botão) {
      case 2:
        this.name_2=row.name
        break;
      case 3:
        break
      case 4:
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
      case 5:
          this.name_5=row.name
          this.lista.push(row.name)
          console.log(this.lista);
          
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
