import React, { PropTypes } from 'react';
import { changeLanguage, getCurrentLanguage } from 'i18n-config';
import { Link } from 'react-router';
import hocs from 'common-hocs';

const onChangeLanguage = e => {
  const nextLang = e.target.value;

  return changeLanguage(nextLang);
}

/*
  This is a simple wrapper around the application which defines elements common
  to the application.
*/
const App = ({ children, t }) => {
  return (
    <div>
      <select value={ getCurrentLanguage() } onChange={ onChangeLanguage }>
        <option value="en-US">{ t('common:english') }</option>
        <option value="es-US">{ t('common:spanish') }</option>
      </select>
      {
        children
      }
      <div>
        <Link to='/counter'>{ t('common:counter') }</Link>
        <span> | </span>
        <Link to='/puppies'>{ t('common:puppies') }</Link>
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
  t: PropTypes.func
}

export default hocs({ i18n: ['common'] })(App);
