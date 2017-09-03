import { combineReducers } from 'redux';
import { loading } from './loading';
import error from './error';

const rootReducer = combineReducers({
  loading,
  error,
});

export default rootReducer;
