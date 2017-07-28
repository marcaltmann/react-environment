import React from 'react';
import ReactDOM from 'react-dom';

let title = 'My minimal React Webpack Babel setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
