import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login.service';
import { LoginComponent } from 'src/app/view/login/login.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  usuario:string
  pontuacao:number
  constructor(public LoginService: LoginService,
    private router: Router,) { }
  id:number
  estilo:false
  time: any[]
  ngOnInit() {
    this.id=2
  // this.LoginService.userByName().then((res:any) => {
  // console.log(res,'teste');
 
    if(this.id==undefined){
      this.router.navigateByUrl('/login')
    }else{
      this.LoginService.userById(this.id).subscribe({ 
        next: (retorno:any)=>{
          this.usuario=retorno.name
          this.pontuacao=retorno.team.total
        }
      })
    }
// })
 
    
  }
teste(estilo:boolean){
  this.sidenavClose.emit();
    estilo=true
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    
}
 
  public onSidenavClose = (estilo:boolean) => {
    this.sidenavClose.emit();
    estilo=true
  }
}
