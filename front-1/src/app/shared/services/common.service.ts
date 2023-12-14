import { Injectable } from '@angular/core';
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

	encrypt(val:any): string{
		return crypto.AES.encrypt(val, 'zxc#fdsaFDAwsj;6').toString();
	}
	
	decrypt(val:any): string{
		var bytes  = crypto.AES.decrypt(val, 'zxc#fdsaFDAwsj;6');
		return bytes.toString(crypto.enc.Utf8);
	}
	
	loading(status: boolean){
		if(status){
			this.store.dispatch(LOADING.StartLoading());
		} else {
			this.store.dispatch(LOADING.StopLoading());
		}
	}

}
