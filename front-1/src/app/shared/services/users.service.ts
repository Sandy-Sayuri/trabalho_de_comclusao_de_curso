import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiRef: string = environment.API_URL; 
    constructor(private http: HttpClient,
        private router: Router,){}
  user(): Observable<any> {
    return this.http.get<any>(`${this.apiRef}/users`)
  }

}
