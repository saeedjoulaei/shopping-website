import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cards />
      </div>
    );
  }
}

export default App;
