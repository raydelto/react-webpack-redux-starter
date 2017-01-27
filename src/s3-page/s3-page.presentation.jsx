import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import autobind from 'react-autobind';

class S3Page extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    const { buckets } = this.props;
    return (<div>Buckets</div>);
  }
};

S3Page.propTypes = {
  buckets: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({

    })
  ).isRequired
};

export default S3Page;
