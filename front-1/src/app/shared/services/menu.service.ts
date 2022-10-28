
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class MenuService {
    apiRef: string = environment.API_URL;
    constructor(private http: HttpClient){}
    updateById(team:any,id:number): Observable<any> {

        return this.http.put<any>(`${this.apiRef}/team/${id}`,team)
    }
        updateName(name:JSON,id:number): Observable<any> {;
        return this.http.put<any[]>(`${this.apiRef}/users/${id}`,name)
    }
    deleteById(id:number): Observable<any> {
        return this.http.delete<any>(`${this.apiRef}/users/${id}`)
    }

}