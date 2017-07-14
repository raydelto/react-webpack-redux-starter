import { REDUCER_NAME } from './reducer';

export const selectName = (state) => state.getIn([REDUCER_NAME, 'name']);
