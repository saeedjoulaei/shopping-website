import React, { Component } from "react";
import styles from "./Cards.module.css";
import iphoneX from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";
import Card from "./Card";
class Cards extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: 1, image: iphoneX, name: "sumsung", cost: "500 $" },
        { id: 2, image: iphone11, name: "iphone x", cost: "600 $" },
        { id: 3, image: iphone12, name: "lg 65x", cost: "400 $" },
        { id: 4, image: s21, name: "note 11", cost: "300 $" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.userData.map((car) => (
          <Card
            key={car.id}
            image={car.image}
            name={car.name}
            cost={car.cost}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
