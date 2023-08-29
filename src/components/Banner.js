import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/wire-frame-1311161_1280.jpg";
const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="banner" />
      <div className={styles.textContainer}>
        <h1>course</h1>
        <p>
          we are learning <span>React.js</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
