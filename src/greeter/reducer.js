import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { NAME_CHANGED } from './actions';

const defaultState = Map({
  name: ''
});

export const REDUCER_NAME = 'greeter';

export default handleActions({
  [NAME_CHANGED]: (state, action) => state.set('name', action.payload)
}, defaultState);
