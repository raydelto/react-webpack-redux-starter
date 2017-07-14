import hocs from 'common-hocs';
import { selectName } from './selectors';
import { nameChanged } from './actions';
import Greeter from './greeter.presentation';

const mapState = (state, props) => ({
  name: selectName(state, props)
})

const mapDispatch = {
  nameChanged
};

export default hocs({
  redux: { mapState, mapDispatch },
  i18n: ['greeter']
})(Greeter);
