import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ReactWrapper } from 'enzyme';

/* Sets up basic variables to be used by integration tests
 * Params:
 *   reducers: should be an object with all the reducers your page uses
 * Returns:
 *   an object with the following attributes:
 *     store: the reducer store which contains the main dispatcher and the state
 *     dispatchSpy: a jest spy function to be used on assertions of dispatch action calls
 */
export function setupIntegrationTest(reducers) {
  // creating a jest mock function to serve as a dispatch spy for asserting dispatch actions if needed
  const dispatchSpy = jest.fn(() => ({}));
  const reducerSpy = (state, action) => dispatchSpy(action);
  // applying thunk middleware to the the store
  const emptyStore = applyMiddleware(thunk)(createStore);
  const combinedReducers = combineReducers(
    Object.assign(
      {},
      { reducerSpy },
      reducers
    )
  );
  // creating the store
  const store = emptyStore(combinedReducers);

  return { store, dispatchSpy };
}

/* Async function that will finish execution after all promises have been finished
 * Usage:
 *   it('...', async () =. {
 *     // mount component
 *     // execute actions
 *     await flushAllPromises();
 *     // execute assertions for async actions
 *   });
 */
export function flushAllPromises() {
  return new Promise(resolve => setImmediate(resolve));
}
