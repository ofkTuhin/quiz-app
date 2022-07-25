/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "styles/video.module.css";
import thumbnail from "assets/images/3.jpg";
const Video = () => {
  return (
    <a href="#">
      <div className={styles.video}>
        <img src={thumbnail} alt="video" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={styles.meta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
};

export default Video;
