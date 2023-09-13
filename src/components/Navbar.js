import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.logo}>
        <img className={styles.logo} src={logo} alt="logopic" />
      </div>
    </header>
  );
};

export default Navbar;
