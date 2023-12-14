import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  usuario:string
  constructor(public LoginService: LoginService,) { }
  ngOnInit() {
    console.log('oiiii');
    
    this.usuario=this.LoginService.user
    console.log(this.usuario,'this.usuario');
    
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}