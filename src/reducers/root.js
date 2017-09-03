import { combineReducers } from 'redux';
import { loading } from './loading';
import error from './error';
import message from './message';

const rootReducer = combineReducers({
  loading,
  error,
  message,
});

export default rootReducer;
