import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

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
  columnsToDisplay = ['name', 'price', 'playerPosition', ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    console.log('entrei');
    
    this.homeService.listPlayers()
      .subscribe({
        next: result => {
          this.dataSource=result
        }
      })
    
  }
  
  // Setjogadoras(n:number){
  //   let lista=[]
  //   for (let i = 0; i < this.tabela.length; i++) {
  //     if(this.tabela[i].posicao==n){
  //       lista.push(this.tabela[i])
  //       console.log(lista);
        
  //     }
  //   }
  //   this.dataSource=lista 

  // }
  clickedRows(row:any){
    console.log(row);
  }
 
  public executeSelectedChange = (event :any) => {
    console.log(event);
  }
}
