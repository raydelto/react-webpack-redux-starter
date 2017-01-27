import ReactDOM from 'react-dom';
import React from 'react';
import store from 'api/store';
import { Provider } from 'react-redux';
import App from 'app';

ReactDOM.render(
  (
    <Provider store={ store }>
      <App store={ store } />
    </Provider>
  ),
  document.getElementById('app')
);
