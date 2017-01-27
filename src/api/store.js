import apiReducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { Map, fromJS } from 'immutable';
import thunk from 'redux-thunk';
import normalizrMiddleware from 'redux-normalizr-middleware';
import { combineReducers } from 'redux-immutable';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ api: apiReducer });

const middleware = [ thunk, normalizrMiddleware() ];

const store = createStore(
  rootReducer,
  fromJS(window.__DEFAULT_STATE__) || Map(),
  composeEnhancers(applyMiddleware(...middleware))
);

if(!!window) {
  window.addEventListener("unhandledrejection", e => {
    return store.dispatch(apiErrorOccured(fromJS(e)));
  });
}

export default store;
