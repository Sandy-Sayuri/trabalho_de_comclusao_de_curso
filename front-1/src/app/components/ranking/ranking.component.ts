import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  pontuacao: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:100,name:'eu',pontuacao:200},
  {position: 1, name: 'Hydrogen', pontuacao: 1.0079},
  {position: 2, name: 'Helium', pontuacao: 4.0026},
  {position: 3, name: 'Lithium', pontuacao: 6.941},
  {position: 4, name: 'Beryllium',pontuacao: 9.0122},
  {position: 5, name: 'Boron', pontuacao: 10.811},
  {position: 6, name: 'Carbon', pontuacao: 12.0107},
  {position: 7, name: 'Nitrogen', pontuacao: 14.0067},
  {position: 8, name: 'Oxygen', pontuacao: 15.9994},
  {position: 9, name: 'Fluorine', pontuacao: 18.9984},
  {position: 10, name: 'Neon', pontuacao: 20.1797},
];
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-pontuacao'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  console.log(this.dataSource[0]);


  }
  public executeSelectedChange = (event :any) => {
    console.log(event);
  }
}
