import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n-config';

/*
  This is a simple wrapper around the application which defines elements common
  to the application.
*/
const App = ({ children }) => {
  return (
    <MuiThemeProvider>
      <I18nextProvider i18n={ i18n }>
        <div>
          {
            children
          }
        </div>
      </I18nextProvider>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.node
}

export default App;
