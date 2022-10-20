import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { Usuario } from "../model/user.module";
import jwt_decode from "jwt-decode";

@Injectable()
export class LoginService {	  
    apiRef: string = environment.API_URL; 
    constructor(private http: HttpClient,
        private router: Router,){}

    dados:any
    decoded:any
    login(usuario: Usuario): Observable<any> {
        return this.http.post<any>(`${this.apiRef}/login`,usuario)
    }

    userById(n:number): Observable<any>{
        console.log(n);
        
        return this.http.get<any>(`${this.apiRef}/users/${n}`)
    }

    async userByName(): Promise<any>{
        this.dados=2
        this.decoded = jwt_decode(`${localStorage.getItem(`${environment.STORAGE_NAME}:Token`)}`);
       
            return await this.decoded['sub']
        
        
    }
        
}