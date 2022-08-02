/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAuth } from "context/AuthContext";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "styles/header.module.css";

const Account = () => {
  const history = useNavigate();
  const { currentUser, logout } = useAuth();
  const handleLogout = () => {
    logout();
    history("/");
  };
  return (
    <div className={styles.accounts}>
      <span className="material-symbols-outlined"> account_circle </span>
      {currentUser ? (
        <>
          <p>{currentUser.displayName}</p>
          <span
            className="material-symbols-outlined"
            title="Logout"
            onClick={() => handleLogout()}
            style={{ cursor: "pointer" }}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <Link to="/login">
          <a>Login</a>
        </Link>
      )}
    </div>
  );
};

export default Account;
