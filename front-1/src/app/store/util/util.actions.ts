import { createAction, props } from '@ngrx/store';

export enum MessageActions {
    INSERT_PAGE = '[UTIL] Insert page'
}

export const AddPage = createAction(
	MessageActions.INSERT_PAGE,
	props<{page: string;}>(),
);
