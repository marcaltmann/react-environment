import React from 'react';
import Message from './Message';
import { intlShape, injectIntl, defineMessages, FormattedDate, FormattedRelative,
  FormattedNumber } from 'react-intl';

const propTypes = {
  intl: intlShape.isRequired,
};

const messages = defineMessages({
  welcome: {
    id: 'home.welcome',
    defaultMessage: 'Welcome to this scaffold!',
    description: 'Welcome message for first time users',
  },
});

const Home = ({ intl }) => (
  <div>
    <p>{intl.formatMessage(messages.welcome)}</p>

    <div><FormattedDate value={Date.now()} /></div>
    <div><FormattedNumber value="1000" currency="USD" currencyDisplay="symbol" style="currency" /></div>
    <div><FormattedRelative value={Date.now()} /></div>
    <div><FormattedRelative value={new Date(2015, 4, 6)} /></div>

    <Message />
  </div>
);

Home.propTypes = propTypes;

export default injectIntl(Home);
