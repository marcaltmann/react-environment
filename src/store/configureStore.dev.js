import { createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

let store;

export default function configureStore(initialState) {
  if (store) {
    return store;
  }
  store = createStore(rootReducer, initialState, compose(window.devToolsExtension()));
  return store;
};
