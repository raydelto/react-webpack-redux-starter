import hocs from 'common-hocs';
import { selectCurrentRoles } from 'login-page/selectors';
import { selectValue } from './selectors';
import { countChanged, countChangedSlow  } from './actions';
import Counter from './counter.presentation';

const mapState = (state, props) => ({
  currentRoles: selectCurrentRoles(state, props),
  value: selectValue(state, props)
})

const mapDispatch = {
  onAdd: countChanged, onAddSlowly: countChangedSlow
};

export default hocs({
  redux: { mapState, mapDispatch },
  i18n: ['translation'],
  auth: ['user']
})(Counter);
