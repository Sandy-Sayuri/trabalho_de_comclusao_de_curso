import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()

export class HomeService {
	apiRef: string = environment.API_URL;

	constructor(private http: HttpClient){}
  
   listPlayers(): Observable<any[]>{
      console.log(this.http.get<any[]>(`${this.apiRef}players`), 'oiiii' );
      
      return this.http.get<any[]>(`http://localhost:8080/players`) 	   
   }

   
       
}