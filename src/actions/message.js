import * as types from '../constants/types.js';
import * as api from '../api';

export function fetchMessage() {
  return (dispatch) => {
    dispatch({
      type: types.message.FETCH_REQUEST,
    });
    return api.fetchMessage()
      .then(response => dispatch({
        type: types.message.FETCH_SUCCESS,
        payload: {
          message: response.message,
        },
      }))
      .catch(ex => dispatch({
        type: types.message.FETCH_FAILURE,
        payload: ex,
      }));
  };
}
