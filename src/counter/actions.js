import { createActions } from 'redux-actions';

export const COUNT_CHANGED = 'COUNT_CHANGED';
export const RANDOM_NEGATIVE = 'RANDOM_NEGATIVE';
export const RANDOM_POSITIVE = 'RANDOM_POSITIVE';

export const {
  countChanged, randomNegative, randomPositive
} = createActions(COUNT_CHANGED, RANDOM_NEGATIVE, RANDOM_POSITIVE);
