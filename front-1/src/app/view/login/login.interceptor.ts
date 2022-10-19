import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, finalize, Observable } from 'rxjs';
import { Router } from '@angular/router';import { environment } from 'src/environments/environment';
;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	blockInterceptor: boolean = false

	constructor(
				private router: Router){}
	
	intercept(request: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
		let token = localStorage.getItem(`${environment.STORAGE_NAME}:Token`)
		
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
