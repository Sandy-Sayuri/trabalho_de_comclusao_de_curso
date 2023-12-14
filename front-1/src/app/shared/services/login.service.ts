import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../model/user.module";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient){}
    user:string
    validacao:boolean
    login(usuario: Usuario): Observable<any> {
        return this.http.post<any>(`http://localhost:3000/auth/tokengenerator`, usuario)
    }
    azure(): Observable<any> {
        return this.http.post<any>(`http://localhost:3000/azure`,'http://localhost:4200/login')
    }
    username(usuario: Usuario){
        return this.user=usuario.username
    }
        
}