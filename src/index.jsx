import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import AppRouter from 'app-router';
import { VERSION, RELEASE } from 'APP_CONFIG';
import 'regenerator-runtime/runtime';
import 'isomorphic-fetch';

// this file "kicks off" the application.
// it's where we define where our application will hook into DOM
// and what should be used as the root component

const renderApp = (Component) => {
  ReactDOM.render(
    (<AppContainer>
      <Component />
    </AppContainer>),
    document.getElementById('app')
  );
}

renderApp(AppRouter);

if (module.hot) {
  module.hot.accept('./app-router', () => {
    const NextRoot = require('./app-router').default;
    renderApp(NextRoot);
  });
}

window.__APP_INFORMATION = {
  version: VERSION,
  release: RELEASE
};
