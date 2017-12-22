declare var __VERSION__: string;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './components/Root';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode');
  console.log(`App version: ${__VERSION__}`);
}
