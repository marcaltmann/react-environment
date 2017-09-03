/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './store/exampleUse';
import Dummy from './components/Dummy';

const store = configureStore();

const title = 'My minimal React Webpack Babel setup';
const onButtonClick = () => {
  console.log('clicked…');
};

ReactDOM.render(
  <Provider store={store}>
    <Dummy content={title} onButtonClick={onButtonClick} />
  </Provider>,
  document.getElementById('app')
);

console.log(`App version: ${__VERSION__}`);
