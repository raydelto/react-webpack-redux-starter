import { handleActions } from 'redux-actions';
import { UNHANDLED_API_ERROR_OCCURED, ON_LOGIN_SUCCESS } from './actions';
import { Map } from 'immutable';

const DEFAULT_STATE = Map();

export default handleActions({
  [UNHANDLED_API_ERROR_OCCURED]: (state, action) => state,
  [ON_LOGIN_SUCCESS]: (state, action) => state.set('auth', action.payload)
}, DEFAULT_STATE)
