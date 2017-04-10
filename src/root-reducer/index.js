import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux'
import { REDUCER_NAME as ROUTING_REDUCER_NAME } from 'app-router';

export default (asyncReducers) => combineReducers({
  [ROUTING_REDUCER_NAME]: routerReducer,
  ...asyncReducers
})
