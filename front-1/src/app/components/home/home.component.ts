import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-teste',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class testeComponent implements OnInit {
  typesOfShoes: string[] 

  constructor() { }

  ngOnInit(): void {
    this.typesOfShoes= ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  }
  setJogadora(val:any) {
  
  }
  public executeSelectedChange = (event :any) => {
    console.log(event);
  }
}
