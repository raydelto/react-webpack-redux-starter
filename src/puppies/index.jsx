import React, { PropTypes } from 'react';
import hocs from 'common-hocs';

const Puppies = ({ t }) => {
  return (<div>
    <img src="https://s-media-cache-ak0.pinimg.com/564x/b8/61/7e/b8617eba84462ae0741f3ead09da1092.jpg" />
    <h4>{ t('puppies:bernese') }</h4>
  </div>)
};

Puppies.propTypes = {
  t: PropTypes.func
}

export default hocs({ i18n: ['puppies'] })(Puppies);
