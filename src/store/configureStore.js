import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/root';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const configureStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(createLogger(), thunk))
  );

export default configureStore;
