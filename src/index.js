/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './components/Root';

const store = configureStore();

const locale = 'en';

ReactDOM.render(
  <Root store={store} locale={locale} />,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode');
  console.log(`App version: ${__VERSION__}`);
}
