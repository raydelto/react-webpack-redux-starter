import { countChanged, RANDOM_POSITIVE, RANDOM_NEGATIVE } from './actions';
import { call, put, takeLatest } from 'redux-saga/effects';

const getRandom = (min, max) => {
  return fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=5&base=10&format=plain&rnd=new`)
    .then(res => {

      return res.text();
    }).then(res => {

      return res;
    });
}

function* randomPositive(action) {
  const result = yield call(getRandom, 1, 100);
  yield put(countChanged(action.payload + parseInt(result)));
}

function* randomNegative(action) {
  const result = yield call(getRandom, -100, -1);
  yield put(countChanged(action.payload + parseInt(result)));
}

export default function* () {
  yield takeLatest(RANDOM_POSITIVE, randomPositive);
  yield takeLatest(RANDOM_NEGATIVE, randomNegative);
}
