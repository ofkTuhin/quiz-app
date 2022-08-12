/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "styles/video.module.css";

import { Link } from "react-router-dom";
const Video = ({ noq, yId, title }) => {
  return (
    <>
      {noq > 0 ? (
        <Link to={`/quiz/${yId}`}>
          <div className={styles.video}>
            <img
              src={`http://img.youtube.com/vi/${yId}/maxresdefault.jpg`}
              alt="video"
            />
            <p>{title}</p>
            <div className={styles.meta}>
              <p>{noq} Questions</p>
              <p>Score : {noq * 5}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className={styles.video}>
          <img
            src={`http://img.youtube.com/vi/${yId}/maxresdefault.jpg`}
            alt="video"
          />
          <p>{title}</p>
          <div className={styles.meta}>
            <p>{noq} Questions</p>
            <p>Score : {noq * 5}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
