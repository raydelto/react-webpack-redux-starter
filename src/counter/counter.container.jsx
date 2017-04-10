import hocs from 'common-hocs';
import { selectValue } from './selectors';
import { countChanged, randomNegative, randomPositive  } from './actions';
import Counter from './counter.presentation';

const mapState = (state, props) => ({
  value: selectValue(state, props)
})

const mapDispatch = {
  onAdd: countChanged,
  onRandomPositive: randomPositive,
  onRandomNegative: randomNegative
};

export default hocs({
  redux: { mapState, mapDispatch },
  i18n: ['counter']
})(Counter);
