import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home.jsx';
import About from './About.jsx';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
    </div>
  </Router>
);

export default App;
