import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as fromApp from '@app/app.reducer';
import { Store } from '@ngrx/store';
import * as LOADING from '@shared/store/loading/loading.actions';
import * as crypto from 'crypto-js';

@Injectable({
	providedIn: 'root',
})
export class CommonServices {
	constructor(private store: Store<fromApp.AppState>) {}
				

	//* Função que formata o objeto para o padrão Base64
	convertToBase64(item) {
		return btoa(JSON.stringify(item));
	}

	encrypt(val:any): string{
		return crypto.AES.encrypt(val, 'zxc#fdsaFDAwsj;6').toString();
	}
	
	decrypt(val:any): string{
		var bytes  = crypto.AES.decrypt(val, 'zxc#fdsaFDAwsj;6');
		return bytes.toString(crypto.enc.Utf8);
	}

	numberOnly(event): boolean {
		const charCode = event.which ? event.which : event.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	}
	
	loading(status: boolean){
		if(status){
			this.store.dispatch(LOADING.StartLoading());
		} else {
			this.store.dispatch(LOADING.StopLoading());
		}
	}

	//* Função que valida o email cadastrado
	validEmail(form: FormGroup): boolean {
		const field = form.controls.email;
		let validation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/.test(
			field.value,
		);
		if (field.touched && !validation && field.value) {
			return true;
		} else {
			return false;
		}
	}

}
