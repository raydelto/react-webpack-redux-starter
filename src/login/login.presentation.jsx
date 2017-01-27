import React, { PropTypes } from 'react';
import autobind from 'react-autobind';
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  onLoginStart() {
    const { onLoginStart } = this.props;
    return onLoginStart();
  }

  onLoginDone(res) {
    const { onLoginSuccess, onLoginError } = this.props;

    if(res.accessToken) {
      return onLoginSuccess(res);
    }

    return onLoginError(res);
  }

  render() {
    const { appId } = this.props;

    return (
      <FacebookLogin
        appId={ appId }
        autoLoad={ true }
        onClick={ this.onLoginStart }
        callback={ this.onLoginDone }
      />
    )
  }
}

Login.propTypes = {
  appId: PropTypes.string.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
  onLoginError: PropTypes.func.isRequired,
  onLoginStart: PropTypes.func
};

Login.defaultProps = {
  onLoginStart: () => {}
};

export default Login;
