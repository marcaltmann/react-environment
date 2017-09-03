import initialState from '../constants/initialState';
import * as types from '../constants/types';

export default function message(state = initialState.message, action) {
  switch (action.type) {
  case types.message.FETCH_REQUEST:
    return null;
  case types.message.FETCH_SUCCESS:
    return action.payload.message;
  case types.message.FETCH_FAILURE:
    return null;
  default:
    return state;
  }
}
