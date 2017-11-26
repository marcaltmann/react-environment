import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import browserLocale from 'browser-locale';
import App from './App';

import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import zh from 'react-intl/locale-data/zh';

import localeDataEn from '../locales/en';
import localeDataDe from '../locales/de';
import localeDataZh from '../locales/zh';

const localeData = {
  en: localeDataEn,
  de: localeDataDe,
  zh: localeDataZh,
};

/**
 * ['en', 'en-GB', 'en-US'] -> und mehr
 * ['zh', 'zh-cn']
 *
 * const regexp = /^de/i;
 * oder einfach locale.slice(0, 2);
 * locale.slice(0, 2).toLowerCase()
 */

const locale = browserLocale();
console.log(locale);

document.documentElement.lang = locale;

addLocaleData([...en, ...de, ...zh]);

const Root = ({ store }) => (
  <IntlProvider locale={locale} messages={localeData[locale]}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </IntlProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
