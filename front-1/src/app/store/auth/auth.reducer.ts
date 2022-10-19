import { CommonServices } from '@app/shared/services/common.service';
import { Action, createReducer, on } from '@ngrx/store';
import { RemoveUserData, SetUser } from './auth.actions';

export interface AuthState {
	user: string; 
}

export const initialState: AuthState = {
	user: null
};

const _authReducer = createReducer(
	initialState,
	on(SetUser, (state, props) => {
		return {
			...state,
			user: props.user
		};
	}),
	on(RemoveUserData, () => {
		return initialState;
	}),
);

export function authReducer(state: AuthState, action: Action) {
	return _authReducer(state, action);
}

export const getLanguage = (state: any) => { 
	state.user
} 

export const getName = (state: any) => { 
	let commonService: CommonServices 
	state.user ? JSON.parse(commonService.decrypt(state.user)).name : null;
} 

export const getUserDataState = (state: AuthState) => 
	state;
