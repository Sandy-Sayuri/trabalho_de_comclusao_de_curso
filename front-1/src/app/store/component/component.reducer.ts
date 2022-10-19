import { Action, createReducer, on } from '@ngrx/store';
import { AddAction, AddComponentAction, AddOnlyAction } from './component.actions';

export interface ComponentState {
	component: string
	action: string
	parameter: any[]
}

const initialState: ComponentState = { 
	component:'', 
	action: '',
	parameter: [] 
}

const _componentReducer = createReducer(initialState,
	on(AddAction, (state, props) => {
		return {
			...state,
			component: props.component,
			action: props.action,
			parameter: props.parameter
		};
	}),
	on(AddComponentAction, (state, props) => {
		return {
			...state,
			component: props.component,
			action: props.action,
		};
	}),
	on(AddOnlyAction, (state, props) => {
		return {
			...state,
			action: props.action,
		};
	}),
);

export function ComponentReducer(state: ComponentState, action: Action) {	
	return _componentReducer(state, action);
}

export const getIsComponent = (state: ComponentState) => state.action;
