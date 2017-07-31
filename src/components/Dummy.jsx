import React from 'react';
import PropTypes from 'prop-types';

const Dummy = (props) => (
  <p className="dummy">
    {props.content}
  </p>
);

Dummy.propTypes = {
  content: PropTypes.string,
};

export default Dummy;
