import { createAction } from 'redux-actions';

export const UNHANDLED_API_ERROR_OCCURED = 'UNHANDLED_API_ERROR_OCCURED';
export const apiErrorOccured = createAction(UNHANDLED_API_ERROR_OCCURED);

export const ON_LOGIN_BEGIN = 'ON_LOGIN_BEGIN';
export const onLoginBegin = createAction(ON_LOGIN_BEGIN);

export const ON_LOGIN_SUCCESS = 'ON_LOGIN_SUCCESS';
export const onLoginSuccess = createAction(ON_LOGIN_SUCCESS);

export const ON_LOGIN_ERROR = 'ON_LOGIN_ERROR';
export const onLoginError = createAction(ON_LOGIN_ERROR);
