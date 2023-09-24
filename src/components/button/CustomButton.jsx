import React from "react";

const CustomButton = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default CustomButton;
