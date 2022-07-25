import React from "react";
import styles from "styles/illustration.module.css";
import illustration from "assets/images/signup.svg";
const Illustration = () => {
  return (
    <div className={styles.illustration}>
      <img src={illustration} alt="signup" />
    </div>
  );
};

export default Illustration;
