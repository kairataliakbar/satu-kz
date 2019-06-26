import React from "react";
import PropTypes from "prop-types";

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(value, name) {
    return this.onInputChange(value, name);
  }

  render() {
    const { selectArray, onInputChange, title } = this.props;
    return (
      <select
        className="heading-tc"
        onChange={e => onInputChange(title, e.target.value)}
      >
        {selectArray.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    );
  }
}

Select.propTypes = {
  selectArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onInputChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Select;
