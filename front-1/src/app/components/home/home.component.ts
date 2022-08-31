import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
  const ELEMENT_DATA = [
    {name: 'Hydrogen',vitorias:2,derotas:2,preco:'R$20',time:'okkkkk','posicao':1},
    {name: 'Helium',vitorias:10,derotas:2,preco:'R$20',time:'oiiiii','posicao':2},
    {name: 'Lithium',vitorias:20,derotas:2,preco:'R$20',time:'oiiiii','posicao':3},
    {name: 'Beryllium',vitorias:10,derotas:2,preco:'R$20',time:'oiiiii','posicao':4},
    {name: 'Boron',vitorias:10,derotas:2,preco:'R$20',time:'oiiiii','posicao':5},
    {name: 'Carbon',vitorias:10,derotas:2,preco:'R$20',time:'oiiiii','posicao':6},
    {name: 'Nitrogen',vitorias:10,derotas:2,preco:'R$20',time:'oiiiii','posicao':7},
    {name: 'Oxygen',vitorias:10,derotas:2,preco:'R$20',time:'oiiiii','posicao':8},
    {name: 'Fluorine',vitorias:10,derotas:2,preco:'R$20',time:'oiiiii','posicao':3},
    {name: 'Neon',vitorias:10,derotas:2,preco:'R$20',time:'oiiiii','posicao':4},
  ];

@Component({
  selector: 'app-teste',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class testeComponent implements OnInit {
  displayedColumns: string[] = ['name','time','vitorias','derotas','preco'];
  dataSource = ELEMENT_DATA;
  tabela=ELEMENT_DATA;
  linha:string
  clicked: boolean = false
  constructor() { }

  ngOnInit(): void {
    
  }
  Setjogadoras(n:number){
    let lista=[]
    for (let i = 0; i < this.tabela.length; i++) {
      if(this.tabela[i].posicao==n){
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
