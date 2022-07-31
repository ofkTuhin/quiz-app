/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styles from "styles/progressbar.module.css";
import Button from "./Button";

const Progressbar = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.backButton}>
        <span className="material-symbols-outlined">arrow_back</span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>24% complete</div>
        <div className={styles.rangeBody}>
          <div className={styles.progress}></div>
        </div>
      </div>

      <Link to="/result">
        <a>
          <Button className={styles.next}>
            <span>Next Question</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default Progressbar;
