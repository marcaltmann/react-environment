import * as types from 'constants/types.js';
import * as api from 'api';

const fetchMessage = () => (dispatch) => {
  dispatch({
    type: types.message.FETCH_REQUEST,
  });

  return api.fetchMessage().then(
    response => {
      dispatch({
        type: types.message.FETCH_SUCCESS,
        payload: {
          message: response.message,
        },
      });
    },
    err => {
      dispatch({
        type: types.message.FETCH_FAILURE,
        payload: err.message || 'Something went wrong.',
      });
    }
  );
};

export { fetchMessage };
