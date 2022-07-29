import React from "react";
import styles from "styles/illustration.module.css";

const Illustration = ({ illustration, img }) => {
  console.log(img);
  console.log(illustration);
  return (
    <div className={styles.illustration}>
      <img src={illustration} alt="signup" />
    </div>
  );
};

export default Illustration;
