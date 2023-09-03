import React, { Component } from "react";
import styles from "./Cards.module.css";
import iphoneX from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";
import Card from "./Card";
class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={iphoneX} name="sumsung" cost="500 $" />
        <Card image={iphone11} name="iphone x" cost="600 $" />
        <Card image={iphone12} name="lg 65x" cost="400 $" />
        <Card image={s21} name="note 11" cost="300 $" />
      </div>
    );
  }
}

export default Cards;
