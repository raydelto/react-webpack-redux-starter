import { countChanged, nameChanged, RANDOM_POSITIVE, RANDOM_NEGATIVE , NAME_UPDATED } from './actions';
import { call, put, takeLatest } from 'redux-saga/effects';

const getRandom = (min, max) => {
  return fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=5&base=10&format=plain&rnd=new`)
    .then(res => res.text())
    .then(res => res);
}

const getJSON = () => {
  return fetch('https://www.raydelto.org/json.php')    
    .then(res => res.text())
    .then(res =>  res);
}

function* name(){
  const result = yield call(getJSON);
  yield put(nameChanged(result)); 
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
  yield takeLatest(NAME_UPDATED, name);
}
