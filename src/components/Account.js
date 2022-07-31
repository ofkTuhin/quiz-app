/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styles from "styles/header.module.css";

const Account = () => {
  return (
    <div className={styles.accounts}>
      <span class="material-symbols-outlined"> account_circle </span>
      <Link to="/signup">
        <a>Sign up</a>
      </Link>
      <Link to="/login">
        <a>Login</a>
      </Link>
    </div>
  );
};

export default Account;
