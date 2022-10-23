import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Senha } from '../model/senha.module';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SenhaService {
  apiRef: string = environment.API_URL;

  constructor(private http: HttpClient) { 
    
  }
  senha(senha:Senha): Observable<any> {
    return this.http.post<any>(`${this.apiRef}/auth/forgot`,senha)
}
}
