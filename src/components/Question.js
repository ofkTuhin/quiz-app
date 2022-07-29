import React from "react";
import styles from "styles/question.module.css";
import Answers from "./Answers";

const Question = () => {
  return (
    <div className={styles.questions}>
      <div className={styles.qtitle}>
        <span className="material-symbols-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
};

export default Question;
