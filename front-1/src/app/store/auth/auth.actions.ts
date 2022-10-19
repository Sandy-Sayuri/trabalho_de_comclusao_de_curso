import { createAction, props } from '@ngrx/store';

/* Actions */
export const SET_USER = '[Auth] Set User';
export const REMOVE_USER_DATA = '[Auth] Remove User Data';

export const SetUser = createAction(
	SET_USER,
	props<{ user: string }>(),
);

export const RemoveUserData = createAction(REMOVE_USER_DATA);
