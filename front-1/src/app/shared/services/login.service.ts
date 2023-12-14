import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../model/user.module";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient){}
    user:string
    login(usuario: Usuario): Observable<any> {
        return this.http.post<any>(`http://localhost:3000/auth/tokengenerator`, usuario)
    }
    username(usuario: Usuario){
        this.user=usuario.username
    }
        
}