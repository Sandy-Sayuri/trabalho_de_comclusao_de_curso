import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { UsersService } from 'src/app/shared/services/users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email','birthDate'];
  dataSource : any[];
  id:number
  constructor(private LoginService:LoginService,
              private router: Router,
              private UsersService:UsersService ) { }

  ngOnInit(): void {
    this.LoginService.userByName().subscribe({ 
      next: (retorno:any)=>{
        console.log(retorno);
           this.id=retorno.id 
    this.LoginService.userById(this.id).subscribe({ 
      next: (retorno:any)=>{

        if(retorno.perfis.length!=2){
          localStorage.clear();
          this.router.navigate(['login']);
        }else{
          this.UsersService.user().subscribe({
            next:(retorno:any)=>{
              this.dataSource=retorno
            }
          })
        }

        
      }})
    console.log(this.dataSource[0]);
    }
    })
    }
    public executeSelectedChange = (event :any) => {
      console.log(event);
    }
  }
