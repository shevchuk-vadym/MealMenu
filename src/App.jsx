import React, { Component } from "react";
import { MainMeal } from "./MainMeal";
import styles from "./App.module.css";
import { MealMenu } from "./MealMenu";

class App extends Component {
  constructor() {
    super();
    this.state = { meal: [], test: "HELLO" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchRandomMeal();
    }, 3000);
  }

  fetchRandomMeal = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const slides = await response.json();

    this.setState({ meal: slides.meals });
    console.log();
  };
  render() {
    console.log("RENDERED");
    return (
      <div>
        {this.state.test}
        <button onClick={this.fetchRandomMeal}>Load meal</button>
        <MainMeal meal={this.state.meal} />
      </div>
    );
  }
}

export { App };
