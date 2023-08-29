import React, { Component } from "react";
import styles from "./Cards.module.css";
import mobile from "../images/pngfind.com-samsung-mobile-png-948177.png";
import Card from "./Card";
class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={mobile} name="sumsung" cost="500 $" />
        <Card image={mobile} name="iphone x" cost="600 $" />
        <Card image={mobile} name="lg 65x" cost="400 $" />
        <Card image={mobile} name="note 11" cost="300 $" />
      </div>
    );
  }
}

export default Cards;
