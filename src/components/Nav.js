/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "styles/header.module.css";
import logo from "assets/images/logo-bg.png";
import Account from "./Account";
const Nav = () => {
  return (
    <header className={` ${styles.header}`}>
      <div className="container">
        <nav className={styles.nav}>
          <ul>
            <li>
              <a className={styles.brand}>
                <img src={logo} alt="learn with sumit" />
                <h3>Learn with sumit</h3>
              </a>
            </li>
          </ul>
          <Account />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
