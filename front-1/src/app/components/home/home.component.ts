import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-teste',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class testeComponent implements OnInit {
  colTable: any[] = [
    { field: 'name', header: 'Nome', type: 'text' },
  ]
  dataSource: any[];
  clicked: boolean = false
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    console.log('entrei');
    
    this.homeService.listPlayers()
      .subscribe({
        next: result => {
          console.log('okkkkkkkkk');
          console.log(result,'result')
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
