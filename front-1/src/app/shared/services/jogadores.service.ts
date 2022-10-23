import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Jogadora, Score } from '../model/jogadora.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogadoresService {
  apiRef: string = environment.API_URL; 
  constructor(private http: HttpClient,
      private router: Router,){}

  dados:any
  decoded:any
  pegarJogadora(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiRef}/players/${id}`)
  }
  colocarJogadora(jogadora:Jogadora): Observable<any> { 
    console.log(jogadora);
    
      return this.http.post<any>(`${this.apiRef}/players`,jogadora)
  }
  colocarScore(score:Score): Observable<any> { 
    console.log(score);
    return this.http.put<any>(`${this.apiRef}/scores`,score)
  }

}
