/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styles from "styles/progressbar.module.css";
import Button from "./Button";

const Progressbar = ({ nextQuestion, prevQuestion, percentage }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.backButton}>
        <span
          className="material-symbols-outlined"
          onClick={() => prevQuestion()}
        >
          arrow_back
        </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>{percentage}</div>
        <div className={styles.rangeBody}>
          <div
            className={styles.progress}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <Button className={styles.next} onClick={() => nextQuestion()}>
        <span>Next Question</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </Button>
    </div>
  );
};

export default Progressbar;
