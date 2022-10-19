import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComponent from './component.reducer';

export const getComponentState = createFeatureSelector<fromComponent.ComponentState>('component');
	
export const getIsComponent = createSelector(
	getComponentState,
	result => result
);
