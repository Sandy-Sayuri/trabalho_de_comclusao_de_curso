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
  columnsToDisplay = ['name', 'price', 'playerPosition', ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement:  null;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    
    this.homeService.listPlayers()
      .subscribe({
        next: result => {
          this.dataSource=result
          this.tabela=result
        }
      })
    
  }
  
  Setjogadoras(n:string){
    let lista=[]
    console.log(n);
    
    for (let i = 0; i < this.tabela.length; i++) {
      if(this.tabela[i].playerPosition==n){
        lista.push(this.tabela[i])
        console.log(lista);
        
      }
    }
    this.dataSource=lista 

  }
  clickedRows(row:any){
    console.log(row);
  }
 
  public executeSelectedChange = (event :any) => {
    console.log(event);
  }
}
