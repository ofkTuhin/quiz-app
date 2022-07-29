import React from "react";
import CheckBox from "./CheckBox";
import styles from "styles/answers.module.css";

const Answers = () => {
  return (
    <div className={styles.answers}>
      <div className={styles.block}>
        <CheckBox text="A New Hope 1" className={styles.answer} />
      </div>
      <div className={styles.block}>
        <CheckBox text="A New Hope 1" className={styles.answer} />
      </div>
      <div className={styles.block}>
        <CheckBox
          text="A New Hope 1"
          className={`${styles.answer} ${styles.currect}`}
        />
      </div>
      <div className={styles.block}>
        <CheckBox text="A New Hope 1" className={styles.answer} />
      </div>
      <div className={styles.block}>
        <CheckBox text="A New Hope 1" className={styles.answer} />
      </div>
      <div className={styles.block}>
        <CheckBox text="A New Hope 1" className={styles.answer} />
      </div>
      <div className={styles.block}>
        <CheckBox text="A New Hope 1" className={styles.answer} />
      </div>
      <div className={styles.block}>
        <CheckBox
          text="A New Hope 1"
          className={`${styles.answer} ${styles.wrong}`}
        />
      </div>
    </div>
  );
};

export default Answers;
