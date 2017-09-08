import initialState from '../constants/initialState';
import * as types from '../constants/types';
import { createReducer } from './reducerUtilities';

function setError(errorState, action) {
  return action.payload.message;
}

function clearError() {
  return null;
}

const errorReducer = createReducer(initialState.error, {
  [types.error.SET]: setError,
  [types.error.CLEAR]: clearError,
});

export default errorReducer;
