import React from "react";
import styles from "./MainMeal.module.scss";

export class MainMeal extends React.Component {
  render() {
    return this.props.meal.map((meal) => {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const key = "strIngredient" + i;
        const ingredient = <p>{meal[key]}</p>;
        ingredients.push(ingredient);
      }
      return (
        <div className={styles.Random_meal}>
          <div className={styles.meal}>
            <div className={styles.meal_image}>
              <img className={styles.img} src={meal.strMealThumb} alt="" />
            </div>
            <div className={styles.meal_main}>
              <div className={styles.meal_name}>
                <h1>{meal.strMeal}</h1>
              </div>
              <div className={styles.meal_description}>
                <p>{meal.strInstructions}</p>
              </div>
            </div>
          </div>
          <div className="meal1">
            <div className="meal_category">
              <p className="meal_category">Category: {meal.strCategory}</p>
              <p className="meal_area">Area: {meal.strArea}</p>
              <p className="meal_tags">Tags: {meal.strTags}</p>
            </div>
            <div className="meal_ingredients">
              <h3>Ingredients:</h3>
              {ingredients}
            </div>
          </div>
        </div>
      );
    });
  }
}
