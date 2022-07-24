import React from "react";
import styles from "styles/header.module.css";

const Account = () => {
  return (
    <div className={styles.accounts}>
      <span class="material-symbols-outlined"> account_circle </span>
      <a href="signup.html">Sign up</a>
    </div>
  );
};

export default Account;
