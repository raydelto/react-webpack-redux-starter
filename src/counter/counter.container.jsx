import { connect } from 'react-redux';
import { selectCurrentRoles } from 'login-page/selectors';
import { selectValue } from './selectors';
import { countChanged, countChangedSlow  } from './actions';
import Counter from './counter.presentation';
import { translate } from 'react-i18next';
import authorized from 'authorized';

const mapState = (state, props) => ({
  currentRoles: selectCurrentRoles(state, props),
  value: selectValue(state, props)
})

const mapDispatch = {
  onAdd: countChanged, onAddSlowly: countChangedSlow
};

export default translate(['translation'])(connect(mapState, mapDispatch)(authorized(['user'])(Counter)));
