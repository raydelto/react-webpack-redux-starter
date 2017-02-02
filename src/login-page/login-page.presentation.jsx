import React, { PropTypes } from 'react';
import { fromJS } from 'immutable';
import FacebookLogin from 'react-facebook-login';
import AutobindComponent from 'autobind-component';

// @TODO: There is a timing issue with FacebookLogin that
// throws setState() after unmount warning; but it doesn't effect
// the application in any real way. Should be fixed at some
// point.

class LoginPage extends AutobindComponent {
  onLoginDone(res) {
    const { loginSuccess, loginFailed, router } = this.props;

    if(res.accessToken) {
      loginSuccess(fromJS({ roles: ['user'], id: res.userID }))

      return router.push('/counter');
    }

    return loginFailed(res);
  }

  render() {
    const { appId } = this.props;

    return (
      <div>
        <FacebookLogin
          appId={ appId }
          autoLoad={ true }
          callback={ this.onLoginDone }
        />
      </div>
    )
  }
}

LoginPage.propTypes = {
  appId: PropTypes.string.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  loginFailed: PropTypes.func.isRequired
};

export default LoginPage;
