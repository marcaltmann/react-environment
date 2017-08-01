import { combineReducers } from 'redux';
import { loading } from './loading.js';

const rootReducer = combineReducers({
  loading,
});

export default rootReducer;
