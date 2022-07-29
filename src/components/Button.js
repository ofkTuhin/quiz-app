import React from "react";
import styles from "styles/button.module.css";

const Button = ({ children, className }) => {
  return <div className={`${styles.button} ${className}`}>{children}</div>;
};

export default Button;
