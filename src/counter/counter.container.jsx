import hocs from 'common-hocs';
import { selectValue , selectName } from './selectors';
import { countChanged, randomNegative, randomPositive, nameUpdated } from './actions';
import Counter from './counter.presentation';

const mapState = (state, props) => ({
  value: selectValue(state, props),
  name: selectName(state,props)
})

const mapDispatch = {
  onAdd: countChanged,
  onRandomPositive: randomPositive,
  onRandomNegative: randomNegative,
  onNameChange: nameUpdated
};

export default hocs({
  redux: { mapState, mapDispatch },
  i18n: ['counter']
})(Counter);
