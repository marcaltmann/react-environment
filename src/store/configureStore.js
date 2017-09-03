import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

let store;

export default function configureStore() {
  if (store) {
    return store;
  }
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
