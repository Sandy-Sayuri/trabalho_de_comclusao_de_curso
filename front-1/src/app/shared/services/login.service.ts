import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { Usuario } from "../model/user.module";

@Injectable()
export class LoginService {	  
    apiRef: string = environment.API_URL; 
    constructor(private http: HttpClient,
        private router: Router,){}
dados:number
    login(): Observable<any> {
        return this.http.get<any>(`${this.apiRef}/users`)
    }
    users(n:number): Observable<any>{
        return this.http.get<any>(`${this.apiRef}/users/${n}`)
    }
    username(dados:any){
        console.log(dados.id,'id-teste');
        if(dados.id!= undefined){
            this.router.navigateByUrl('/login')
        }
        this.dados=dados.id
    }
        
}