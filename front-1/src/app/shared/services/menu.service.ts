
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from "../model/user.module";

@Injectable()
export class MenuService {
    apiRef: string = environment.API_URL;
    constructor(private http: HttpClient){}
    updateById(id:number,team:JSON): Observable<any> {
        return this.http.put<any>(`${this.apiRef}/team/${id}`,team)
    }

}