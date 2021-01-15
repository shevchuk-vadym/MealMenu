import React from "react";
import { MainMeal } from "./MainMeal";

export class MealMenu extends React.Component {
  render() {
    return (
      <div className="meal">
        <button className="GetMeal" onClick={() => <MainMeal />}>
          Get start
        </button>
      </div>
    );
  }
}
