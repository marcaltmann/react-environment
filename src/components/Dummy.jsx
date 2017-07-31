import React from 'react';
import PropTypes from 'prop-types';

const Dummy = (props) => (
  <div>
    <p className="content">
      {props.content}
    </p>
    <button className="button" onClick={props.onButtonClick}>
      Press me
    </button>
  </div>
);

Dummy.propTypes = {
  content: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

export default Dummy;
