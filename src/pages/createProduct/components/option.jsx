import React from "react";

function Option(props) {
  props.map(prop => {
    return <option value={prop.value}>{prop.name}</option>;
  });
}

export default Option;
