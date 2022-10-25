import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()

export class RankingService {
	apiRef: string = environment.API_URL;

	constructor(private http: HttpClient){}
  
  ranking(): Observable<any[]>{  
      return this.http.get<any[]>(`${this.apiRef}/team/rank`) 	   
   }

   
       
}