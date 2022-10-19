import { createAction, props } from '@ngrx/store';

export enum MessageActions {
	ADD_ACTION = '[MESSAGE] Add action',
	ADD_ONLY_ACTION = '[MESSAGE] Add only action',
	ADD_COMPONENT_ACTION = '[MESSAGE] Add component and action',
	REMOVE_ACTION = '[MESSAGE] Remove action',
}

export const AddAction = createAction(
	MessageActions.ADD_ACTION,
	props<{
		component: string;
		action: any;
		parameter: any[]
	}>(),
);

export const AddComponentAction = createAction(
	MessageActions.ADD_COMPONENT_ACTION,
	props<{component:string, action: string;}>(),
);

export const AddOnlyAction = createAction(
	MessageActions.ADD_ONLY_ACTION,
	props<{action: string;}>(),
);

export const RemoveAction = createAction(MessageActions.REMOVE_ACTION);
