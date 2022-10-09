import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()

export class HomeService {
	apiRef: string = environment.API_URL;

	constructor(private http: HttpClient){}
  
   listPlayers(): Observable<any[]>{  
      return this.http.get<any[]>(`${this.apiRef}/players`) 	   
   }
   criateteam(team:JSON):Observable<any[]>{
      return this.http.post<any[]>(`${this.apiRef}/team`,team)
   }
   altualizarteam(id_jogadora:number, id_time:number):Observable<any[]>{
      return this.http.post<any[]>(`${this.apiRef}/players${id_jogadora}/${id_time}`,id_time)
   }

   
       
}