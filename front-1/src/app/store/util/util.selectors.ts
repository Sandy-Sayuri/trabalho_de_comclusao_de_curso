import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUtil from './util.reducer';

export const getUtilState =
	createFeatureSelector<fromUtil.UtilState>('util');

export const getIsUtil = createSelector(
	getUtilState,
	fromUtil.getPage,
);

export const getPage = createSelector(
	getUtilState,
	fromUtil.getPage,
);

export const getUtil = createSelector(
	getUtilState,
	fromUtil.getUtil,
);