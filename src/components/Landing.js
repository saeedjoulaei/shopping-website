import React, { Component } from "react";
import Search from "./Search";
import Banner from "./Banner";
import Cards from "./Cards";
import Logos from "./Logos";

class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Cards />
        <Search />
        <Logos />
      </div>
    );
  }
}

export default Landing;
