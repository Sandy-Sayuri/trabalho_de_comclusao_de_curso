
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuth from './login.reducer';

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const getUser = createSelector(
	getAuthState,
	result => result.user
);
