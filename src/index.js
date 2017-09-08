/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './store/exampleUse';
import Dummy from './components/Dummy';

import dotProp from 'dot-prop-immutable';

let obj = {foo: { bar: true } };

// toggle
let obj2 = dotProp.toggle(obj, 'foo.bar');

console.log(obj, obj2);


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Dummy />
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode');
  console.log(`App version: ${__VERSION__}`);
}
