import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';


@Injectable()
export class CadastroService {	  
    apiRef: string = environment.API_URL; 
    constructor(private http: HttpClient){}
    
    cadastro(item:JSON): Observable<any>{

		return this.http.post<any>(`https://tcc2022unip.herokuapp.com/users`, item)
	}
        
}