import * as types from '../constants/types.js';
import * as api from '../api';

export function fetchMessage() {
  return (dispatch) => {
    dispatch({
      type: types.message.FETCH_REQUEST,
    });
    return api.fetchMessage()
      .then(res => res.json())
      .then(json => dispatch({
        type: types.message.FETCH_SUCCESS,
        payload: {
          message: json.message,
        },
      }))
      .catch(ex => dispatch({
        type: types.message.FETCH_FAILURE,
      }));
  };
}
