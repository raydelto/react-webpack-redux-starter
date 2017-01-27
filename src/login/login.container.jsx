import { onLoginStart, onLoginSuccess, onLoginError } from 'api/actions';
import { connect } from 'react-redux';
import Login from './login.presentation';

const mapDispatch = {
  onLoginStart, onLoginSuccess, onLoginError
};

const mapProps = (state, props) => ({

});

export default connect(mapProps, mapDispatch)(Login);
