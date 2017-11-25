import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Home from './Home';
import About from './About';

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FormattedMessage id="app.home" defaultMessage="Home" description="Home link in menu" />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FormattedMessage id="app.about" defaultMessage="About" description="About link in menu" />
          </Link>
        </li>
      </ul>
    </nav>

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route render={() => (<h3>No match!</h3>)} />
      </Switch>
    </main>
  </div>
);

export default App;
