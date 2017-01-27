import React from 'react';
import Login from 'login/login.container';
import S3Page from 's3-page/s3-page.container';
import { connect } from 'react-redux';
import { FB_APP_ID } from 'APP_CONFIG';
import { Map } from 'immutable';


class App extends React.Component {
  render() {
    const { auth } = this.props;

    const isLoggedIn = auth.includes('accessToken');

    return (
      <div>
        { isLoggedIn ? <S3Page /> : null }
        { !isLoggedIn ? <Login appId={ FB_APP_ID } /> : null }
      </div>
    );
  }
}

const mapState = (state, props) => ({
  auth: state.get('auth')
});

App.defaultProps = {
  auth: Map()
};

export default connect(mapState)(App);
