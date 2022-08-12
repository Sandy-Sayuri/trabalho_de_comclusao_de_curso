import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class testeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public executeSelectedChange = (event :any) => {
    console.log(event);
  }
}
