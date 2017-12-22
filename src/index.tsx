import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore from 'store/configureStore';
import Root from 'components/Root';

declare var __VERSION__: string;

const store = configureStore();

type AppProps = { message: string };
const App: React.SFC<AppProps> = ({ message }) => <div>{message}</div>;

ReactDOM.render(
  <App message={'Hello world again'} />,
  //<Root store={store} />,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode');
  console.log(`App version: ${__VERSION__}`);
}
