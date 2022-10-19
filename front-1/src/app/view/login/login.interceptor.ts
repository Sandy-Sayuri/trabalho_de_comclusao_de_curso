import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, finalize, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../login/login.reducer';
import * as LOADING from '../../store/loading/loading.actions';
import { Router } from '@angular/router';;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	blockInterceptor: boolean = false

	constructor(
				private router: Router){}
	
	intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
		let token = 'oiiii'
		console.log(token);
		
		if (token) {		
			
			let authRequest = request.clone({headers: request.headers.set('Authorization', `bearer ${token}`)})

			return next.handle(authRequest).pipe(
				catchError(err => {
					throw 'error in source. Details: ' + err;
				})
			) 
		} else {	
			return next.handle(request).pipe(
				catchError(err => {		
					throw err;
				})
			)
		}
	}
}
