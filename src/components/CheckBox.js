import React from "react";

const CheckBox = ({ text, ...rest }) => {
  return (
    <label {...rest}>
      <input type="checkbox" />
      <span>{text}</span>
    </label>
  );
};

export default CheckBox;
