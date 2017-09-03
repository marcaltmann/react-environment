import initialState from '../constants/initialState';
import * as types from '../constants/types';

export function error(state = initialState.error, action) {
  switch (action.type) {
  case types.error.SET:
    return action.payload.message;
  case types.error.CLEAR:
    return null;
  default:
    return state;
  }
}
