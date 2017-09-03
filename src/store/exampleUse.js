/* eslint-disable */
import configureStore from './configureStore';
import { loading, loaded } from '../actions/loading';
import initialState from '../constants/initialState';

const store = configureStore(initialState);

console.log('========== Example store ===========');
store.dispatch(loading());
store.dispatch(loaded());
store.dispatch(loading());
store.dispatch(loaded());
console.log('========== end example store ===========');
