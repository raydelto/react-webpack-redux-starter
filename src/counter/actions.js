import { createActions } from 'redux-actions';

export const COUNT_CHANGED = 'COUNT_CHANGED';
export const RANDOM_NEGATIVE = 'RANDOM_NEGATIVE';
export const RANDOM_POSITIVE = 'RANDOM_POSITIVE';
export const NAME_CHANGED = 'NAME_CHANGED';
export const NAME_UPDATED = 'NAME_UPDATED';


export const {
  countChanged, randomNegative, randomPositive, nameChanged, nameUpdated
} = createActions(COUNT_CHANGED, RANDOM_NEGATIVE, RANDOM_POSITIVE, NAME_CHANGED, NAME_UPDATED);

