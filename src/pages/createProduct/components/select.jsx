import React from "react";
import PropTypes from "prop-types";
import Option from "./option";

const Select = props => {
  const { selectArray } = props;
  const { onInputChange } = props;
  const { title } = props;
  return (
    <select
      className="heading-tc"
      onInputChange={e => onInputChange(title, e.target.value)}
    >
      <Option options={selectArray} />
    </select>
  );
};

Select.propTypes = {
  selectArray: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Select;
