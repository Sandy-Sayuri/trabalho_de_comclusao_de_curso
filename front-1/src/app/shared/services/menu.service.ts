
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class MenuService {
    apiRef: string = environment.API_URL;
    constructor(private http: HttpClient){}
    updateById(team:any,id:number): Observable<any> {
        console.log(team,'team')
        console.log(id,'id');
        return this.http.put<any>(`https://tcc2022unip.herokuapp.com/team/id/84`,team)
    }
        updateName(name:JSON,id:number): Observable<any> {
        console.log(name,'team')
        console.log(id,'id');
        return this.http.put<any[]>(`https://tcc2022unip.herokuapp.com/users/84`,name)
    }

}