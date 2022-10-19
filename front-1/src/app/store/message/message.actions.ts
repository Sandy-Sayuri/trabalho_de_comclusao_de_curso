import { createAction, props } from '@ngrx/store';

export enum MessageActions {
	ADD_MESSAGE = '[MESSAGE] Add Message',
	REMOVE_MESSAGE = '[MESSAGE] Remove Message',
	RESULT_MESSAGE = '[MESSAGE] Result Message',
}

export const AddMessage = createAction(MessageActions.ADD_MESSAGE,
	props<{
		typeMessage: string;
		message: string;
		message2: string;
	}>(),
);

export const RemoveMessage = createAction(MessageActions.REMOVE_MESSAGE);

export const ResultMessage = createAction(MessageActions.RESULT_MESSAGE,
	props<{
		result: string;
	}>(),
);
