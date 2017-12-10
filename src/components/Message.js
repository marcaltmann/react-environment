import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMessage } from '../actions/message';
import { getMessage } from '../selectors/message';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchMessage());
  }

  render() {
    const { message } = this.props;

    return (
      <p className="message">
        {message}
      </p>
    );
  }
}

Message.propTypes = {
  message: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  console.log(getMessage(state));

  return {
    message: getMessage(state),
  };
}

export default connect(mapStateToProps)(Message);
