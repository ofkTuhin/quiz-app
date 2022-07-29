import React from "react";
import styles from "styles/miniplayer.module.css";

const Miniplayer = () => {
  return (
    <div className={`${styles.miniPlayer} ${styles.floatingButton}`}>
      <span className={`material-symbols-outlined ${styles.open}`}>
        play_circle
      </span>
      <span className={`material-symbols-outlined ${styles.close}`}>close</span>
      <img src="./images/3.jpg" alt="video" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default Miniplayer;
