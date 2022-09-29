import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';


@Injectable()
export class CadastroService {	  
    apiRef: string = environment.API_URL; 
    constructor(private http: HttpClient){}
    
    cadastro(item:any): Observable<any>{
		return this.http.post<any>(`${this.apiRef}/users`, item)
	}
        
}