import { createAction } from '@ngrx/store';

export const START_LOADING = '[LOADING] Start Loading';

export const STOP_LOADING = '[LOADING] Stop Loading';

export const StartLoading = createAction(START_LOADING);

export const StopLoading = createAction(STOP_LOADING);
