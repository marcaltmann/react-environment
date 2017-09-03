import * as types from '../constants/types.js';

export function setError(message) {
  return {
    type: types.error.SET,
    payload: {
      message,
    },
  };
}

export function clearError() {
  return {
    type: types.error.CLEAR,
  };
}
