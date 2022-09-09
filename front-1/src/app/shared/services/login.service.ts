import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { Usuario } from "../model/user.module";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient){}
    user:string
    login(): Observable<any> {
        return this.http.get<any[]>(`${environment.API_URL}/users`) 	  
    }
    username(usuario: Usuario){
        this.user=usuario.username
    }
        
}