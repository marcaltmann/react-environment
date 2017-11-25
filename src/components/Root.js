import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const Root = ({ store, locale }) => (
  <IntlProvider locale={locale}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </IntlProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
};

export default Root;
