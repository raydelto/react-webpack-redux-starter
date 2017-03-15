import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n-config';
import routes from './routes';
import initStore from 'store';

// just saving the reducer name for easy access
export const REDUCER_NAME = 'routing';

const store = initStore();

// this connects our history to our redux store
// tracking any URL changes and allowing use the "push"
// method through redux
export const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get(REDUCER_NAME)
});

// you can optionally define your routes as a JSON object and set the "routes"
// property on the Router. This can be helpful if you want to break up your routing
// amongst your components and then concatenate it all together.
// child routes (routes inside of other routes) are rendered inside of their parents
// for example; the /bucket route will be rendered inside of the / route (which)
// is the App component.
const AppRouter = () => {
  return (
    <Provider store={ store }>
      <I18nextProvider i18n={ i18n }>
        <Router history={ history } routes={ routes(store) }/>
      </I18nextProvider>
    </Provider>
  );
};

export default AppRouter;
