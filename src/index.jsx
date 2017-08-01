import React from 'react';
import ReactDOM from 'react-dom';
import Dummy from './components/Dummy.jsx';

import './store/exampleUse';


let title = 'My minimal React Webpack Babel setup';
let onButtonClick = () => {
  console.log('clicked…');
};

ReactDOM.render(
  <Dummy content={title} onButtonClick={onButtonClick} />,
  document.getElementById('app')
);
