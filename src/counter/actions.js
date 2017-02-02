import { createAction } from 'redux-actions';

export const COUNT_CHANGED = 'COUNT_CHANGED';
export const countChanged = createAction(COUNT_CHANGED);

/*
  This is an example of an "async" action. It uses the "redux-thunk" middleware
  which sees that you've returned a function from an action (a no-op in standard
  redux).

  At this point, redux-thunk cancels the current action and instead calls the function,
  passing in the "dispatch" function for redux. At this point, you can make your web
  callouts, calling any other actions.
*/
export const countChangedSlow = (amnt) => {
  return (dispatch) => {
    setTimeout(() => dispatch(countChanged(amnt)), Math.floor(Math.random() * 1000));
  }
}
