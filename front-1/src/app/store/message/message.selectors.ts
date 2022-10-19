import { createFeatureSelector, createSelector, resultMemoize } from '@ngrx/store';
import * as fromMessage from './message.reducer';

export const getMessageState = createFeatureSelector<fromMessage.MessageState>('message');
	
export const getMessage = createSelector(
	getMessageState,
	fromMessage.getMessage,
);

export const getMessageResult = createSelector(
	getMessageState,
	result => result.result
);

export const getMessageType = createSelector(
	getMessageState,
	result => result.typeMessage
);