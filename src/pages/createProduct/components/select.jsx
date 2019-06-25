import React from "react";
import PropTypes from "prop-types";

const Select = props => {
  const { selectArray, onInputChange, title } = props;
  return (
    <select
      className="heading-tc"
      onInputChange={e => onInputChange(title, e.target.value)}
    >
      {selectArray.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  selectArray: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Select;
