
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class MenuService {
    apiRef: string = environment.API_URL;
    constructor(private http: HttpClient){}
    updateById(team:any): Observable<any> {
        console.log(team,'team')
        return this.http.put<any>(`https://tcc2022unip.herokuapp.com/team/2`,team)
    }

}