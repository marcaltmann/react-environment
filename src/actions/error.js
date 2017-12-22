import * as types from 'constants/types.js';

const setError = (message) => ({
  type: types.error.SET,
  payload: {
    message,
  },
});

const clearError = () => ({
  type: types.error.CLEAR,
});

export { setError, clearError };
