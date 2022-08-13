import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '@app/app.reducer';
import * as LOADING from '@shared/store/loading/loading.actions';
import * as FileSaver from 'file-saver';
import * as xlsx from 'xlsx';
import * as crypto from 'crypto-js';

@Injectable({
	providedIn: 'root',
})
export class CommonServices {
	constructor(private store: Store<fromApp.AppState>) {}
				
	babel(value: string): string{
		let babel: any[] = JSON.parse(this.decrypt(localStorage.getItem('@virtual-assistant:babel')));
		let translate = babel.find(val => val.name.toUpperCase() == value.toUpperCase()) ? babel.find(val => val.name.toUpperCase() == value.toUpperCase()).translate : null
		if(translate==null)
			console.log("** BABEL ** Sem tradução: " + value);
			
		return translate == null ? 'BABEL - Sem tradução!' : translate;
	}

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

	//função que transforma as informações da tabela para o formato xls
	public exportExcel(jsonData: any[], fileName: string): void {
		const worksheet = xlsx.utils.json_to_sheet(jsonData);
		const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
		const excelBuffer: any = xlsx.write(workbook, {
			bookType: 'xlsx',
			type: 'array',
		});
		this.saveExcelFile(excelBuffer, fileName);
	}

	getTheme(): string{
	return localStorage.getItem('@virtual-assistant:config')?
		JSON.parse(localStorage.getItem('@virtual-assistant:config')).theme:'light'
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

	//função que salva as informações da tabela para o formato xls
	private saveExcelFile(buffer: any, fileName: string): void {
		let EXCEL_TYPE =
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
		let EXCEL_EXTENSION = '.xlsx';
		let date = new Date();
		let format =
			'  ' + date.getDate() + ' - ' + date.getHours() + '_' + date.getMinutes();
		const data: Blob = new Blob([buffer], {
			type: EXCEL_TYPE,
		});
		FileSaver.saveAs(data, fileName + format + EXCEL_EXTENSION);
	}

	translateArray(array: any[]): any[]{
		let arrayFinished: any[]=[]
		array.forEach(element => {			          
			arrayFinished.push({name: this.babel(element.name), code: element.id })
		});
		return arrayFinished
	}
}
