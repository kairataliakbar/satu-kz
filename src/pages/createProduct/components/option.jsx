import React from "react";

const Option = props => {
  const array = props.options.map(prop => (
    <option key={prop.value} value={prop.value}>
      {prop.name}
    </option>
  ));
  return array;
};

export default Option;
