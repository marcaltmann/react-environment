import React from 'react';
import Message from './Message';
import { intlShape, injectIntl, defineMessages } from 'react-intl';

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

    <Message />
  </div>
);

Home.propTypes = propTypes;

export default injectIntl(Home);
