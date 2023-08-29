import React from "react";
import styles from "./Logos.module.css";
import gradient from "../images/colorful-letter-gradient-logo-design_474888-2309.avif";
const Logos = () => {
  return (
    <div className={styles.container}>
      <h3>who support us?</h3>
      <div>
        <img src={gradient} alt="gradient" />
        <img src={gradient} alt="gradient" />
        <img src={gradient} alt="gradient" />
      </div>
    </div>
  );
};

export default Logos;
