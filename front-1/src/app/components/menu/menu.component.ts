import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  public Exit(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
