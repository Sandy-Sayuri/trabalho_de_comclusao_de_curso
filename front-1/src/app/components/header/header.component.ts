import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  X: boolean= false;
  constructor(public loginService:  LoginService ) { }
  ngOnInit() {
    this.onChange()
  }
  onChange(){
    let user =this.loginService.username
    console.log(user);
    if(user!= undefined){
      this.X= true
    }else{
      this.X=false
    }

  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}