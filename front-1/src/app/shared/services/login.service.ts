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

    login(usuario: Usuario): Observable<any> {
        console.log(usuario);
        
        return this.http.post<any>(`${this.apiRef}/login`,usuario)
    }

    userById(n:number): Observable<any>{
        return this.http.get<any>(`${this.apiRef}/user/findbyid/${n}`) //s/${n}`)
    }

    userByName(dados:any){
        console.log(dados,"dados");
        if(dados.name!= undefined){
            this.router.navigateByUrl('/login')
        }
        this.dados=dados.name
    }
        
}