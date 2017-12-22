import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore from 'store/configureStore';
import Root from 'components/Root';

declare var __VERSION__: string;

const store = configureStore();

type AppProps = { message: string };
const App: React.SFC<AppProps> = ({ message }) => <div>{message}</div>;


type App2Props = { message: string };
type App2State = { count: number };

class App2 extends React.Component<App2Props, App2State> {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div onClick={this.increment}>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}


ReactDOM.render(
  <App2 message="Hello world" />,
  //<Root store={store} />,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode');
  console.log(`App version: ${__VERSION__}`);
}
