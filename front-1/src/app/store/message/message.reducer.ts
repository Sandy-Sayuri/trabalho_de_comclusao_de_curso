import { Action, createReducer, on } from '@ngrx/store';
import { AddMessage, RemoveMessage, ResultMessage } from './message.actions';
export interface MessageState {
	typeMessage: string;
	message: string;
	message2: string;
	result: string;
}

const initialState: MessageState = {
	typeMessage: null,
	message: null,
	message2: null,
	result: null,
};

const _messageReducer = createReducer(
	initialState,
	on(AddMessage, (state, props) => {
		return {
			...state,
			typeMessage: props.typeMessage,
			message: props.message,
			message2: props.message2,
			result: null
		};
	}),
	on(RemoveMessage, state => {
		return {
			...state,
			...initialState,
		};
	}),
	on(ResultMessage, (state, props) => {		
		return {
			...state,
			result: props.result
		};
	}),
);

export function messageReducer(state: MessageState, action: Action) {
	return _messageReducer(state, action);
}

export const getMessage = (state: MessageState) => state;
