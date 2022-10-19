import { Action, createReducer, on } from '@ngrx/store';
import { AddPage } from './util.actions';

export interface UtilState {
	page: string;
}

const initialState: UtilState = { 
	page: '' 
}

const _utilReducer = createReducer(
	initialState,

	on(AddPage, (state, props) => {
		return {
			...state,
			page: props.page
		};
	}),
);

export function utilReducer(state: UtilState, action: Action) {
	return _utilReducer(state, action);
}

export const getPage = (state: UtilState) => state.page;

export const getUtil = (state: UtilState) => state;