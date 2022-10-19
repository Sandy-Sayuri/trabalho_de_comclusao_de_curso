import { CommonServices } from '@app/shared/services/common.service';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const getUser = createSelector(
	getAuthState,
	result => {
		try {
			return result.user != undefined ? result.user : ''
		} catch (error) {
			return ''
		}
	}
);

export const getLanguage = createSelector( 
	getAuthState,
	result => {
		let commonService: CommonServices 
		result.user ? JSON.parse(commonService.decrypt(result.user)).language : null;
	}
) 