import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { Usuario } from "../model/user.module";

@Injectable()
export class LoginService {	  
    apiRef: string = environment.API_URL; 
    constructor(private http: HttpClient){}
dados:number
    login(): Observable<any> {
        return this.http.get<any>(`${this.apiRef}/users`)
    }
    users(n:number): Observable<any>{
        
        return this.http.get<any>(`${this.apiRef}/users/${n}`)
        n=0
    }
    username(dados:any){
        this.dados=dados.id

    }
        
}