import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { setError, clearError } from 'actions/error';

class Dummy extends Component {
  constructor(props) {
    super(props);
    this.onSetErrorClick = this.onSetErrorClick.bind(this);
    this.onClearErrorClick = this.onClearErrorClick.bind(this);
  }

  onSetErrorClick() {
    this.props.dispatch(setError('Something went wrong'));
  }

  onClearErrorClick() {
    this.props.dispatch(clearError());
  }

  render() {
    const { error } = this.props;

    return (
      <div>
        { error ?
          <p className={classNames('Paragraph', 'has-error')}>
            Error: {error}
          </p> :
          <p className={classNames('Paragraph')}>
            No error
          </p>
        }
        <button className="Button" onClick={this.onSetErrorClick}>
          Set error
        </button>
        <button className="Button" onClick={this.onClearErrorClick}>
          Clear error
        </button>
      </div>
    );
  }
}

Dummy.propTypes = {
  error: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    error: state.error,
  };
}

export default connect(mapStateToProps)(Dummy);
