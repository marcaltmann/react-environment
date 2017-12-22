import React from 'react';
import PropTypes from 'prop-types';

import 'styles/Select.css';

const Select = (props) => {
  return (
    <div className="Select">
      <select className="Select-select">
        <option className="Select-option">Option 1</option>
        <option className="Select-option">Option 2</option>
        <option className="Select-option">Option 3</option>
      </select>
    </div>
  );
};

export default Select;
