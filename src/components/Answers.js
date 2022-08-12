import React from "react";
import CheckBox from "./CheckBox";
import styles from "styles/answers.module.css";

const Answers = ({ handleChecked, options }) => {
  return (
    <div className={styles.answers}>
      {options.map((option, i) => (
        <div className={styles.block} key={i}>
          <CheckBox
            text={option.title}
            className={styles.answer}
            value={i}
            checked={option.checked}
            onChange={(e) => handleChecked(e, i)}
          />
        </div>
      ))}
    </div>
  );
};

export default Answers;
