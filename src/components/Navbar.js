import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Home Page</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.logo}>
        <img className={styles.logo} src={logo} alt="logopic" />
      </div>
    </header>
  );
};

export default Navbar;
