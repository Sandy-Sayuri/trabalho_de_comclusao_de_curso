import { Component, OnInit } from '@angular/core';
;

@Component({
  selector: 'app-oiii',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class oiiiComponent implements OnInit {
  header:any = {title:'teste', subtitle: '123'}
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;

  constructor() { }

  ngOnInit(): void {
  }

}