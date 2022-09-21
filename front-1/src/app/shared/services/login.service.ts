import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { Usuario } from "../model/user.module";

@Injectable()
export class LoginService {	  
    apiRef: string = environment.API_URL; 
    constructor(private http: HttpClient){}
    user:string
    login(usuario: Usuario): Observable<any> {
        console.log(usuario);
        console.log(this.apiRef);
        return this.http.get<any>(`${this.apiRef}/users`)
    }
    username(usuario: Usuario){
        this.user=usuario.username
    }
        
}