import { nameChanged, NAME_CHANGED } from './actions';
import { takeLatest } from 'redux-saga/effects';



export default function* () {
  yield takeLatest(NAME_CHANGED, nameChanged);
}
