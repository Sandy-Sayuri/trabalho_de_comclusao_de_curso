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
        return this.http.post<any>(`${this.apiRef}/login`,usuario)
    }

    userById(n:number): Observable<any>{
        console.log(n);
        
        return this.http.get<any>(`${this.apiRef}/users/${n}`)
    }

    userByName(dados:any){
        dados=1
        let token=localStorage.getItem(`${environment.STORAGE_NAME}:Token`)
        console.log(token);
        
    }
        
}