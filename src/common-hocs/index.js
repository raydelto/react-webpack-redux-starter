import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { compose } from 'redux';

const id = e => e;

export default({ i18n, redux }) => WrappedComponent => {
  const _translate = i18n ? translate(i18n) : id;
  const _connect = redux ? connect(redux.mapState, redux.mapDispatch) : id;

  const finalHoc = compose(_connect, _translate);

  return finalHoc(WrappedComponent);
};
