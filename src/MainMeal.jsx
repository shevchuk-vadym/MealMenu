import React from "react";
import styles from "./MainMeal.module.scss";

const slides = [
  {
    idMeal: "52999",
    strMeal: "Crispy Sausages and Greens",
    strDrinkAlternate: null,
    strCategory: "Pork",
    strArea: "Irish",
    strInstructions:
      "Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1\" pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I'll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/st1ifa1583267248.jpg",
    strTags: null,
    strYoutube: "",
    strIngredient1: "Kale",
    strIngredient2: "Italian Fennel Sausages",
    strIngredient3: "Cabbage",
    strIngredient4: "Garlic Clove",
    strIngredient5: "Onion",
    strIngredient6: "Shiitake Mushrooms",
    strIngredient7: "Chicken Stock",
    strIngredient8: "Salt",
    strIngredient9: "Pepper",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "1  bunch",
    strMeasure2: "8",
    strMeasure3: "1 Head chopped",
    strMeasure4: "8",
    strMeasure5: "Sliced",
    strMeasure6: "Sliced",
    strMeasure7: "1 cup ",
    strMeasure8: " ",
    strMeasure9: " ",
    strMeasure10: " ",
    strMeasure11: " ",
    strMeasure12: " ",
    strMeasure13: " ",
    strMeasure14: " ",
    strMeasure15: " ",
    strMeasure16: " ",
    strMeasure17: " ",
    strMeasure18: " ",
    strMeasure19: " ",
    strMeasure20: " ",
    strSource:
      "https://www.bonappetit.com/columns/cooking-without-recipes/article/kale-cabbage-sausage-weeknight-dinner",
    dateModified: null,
  },
];

export class MainMeal extends React.Component {
  state = {
    slides: [],
  };
  async componentDidMount() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const slides = await response.json();
    this.setState({ slides });
    console.log(this.state.slides.meals[0].idMeal);
  }
  render() {
    return slides.map((slide) => {
      return (
        <div className={styles.Random_meal}>
          <div className={styles.meal}>
            <div className={styles.meal_image}>
              <img className={styles.img} src={slide.strMealThumb} alt="" />
            </div>
            <div className={styles.meal_main}>
              <div className={styles.meal_name}>
                <h1>{slide.strMeal}</h1>
              </div>
              <div className={styles.meal_description}>
                <p>{slide.strInstructions}</p>
              </div>
            </div>
          </div>
          <div className="meal1">
            <div className="meal_category">
              <p className="meal_category">Category: {slide.strCategory}</p>
              <p className="meal_area">Area: {slide.strArea}</p>
              <p className="meal_tags">Tags: {slide.strTags}</p>
            </div>
            <div className="meal_ingredients">
              <h3>Ingredients:</h3>
              <p className="ingr">
                {slide.strIngredient1} - {slide.strMeasure1}
              </p>
              <p className="ingr">
                {slide.strIngredient2} - {slide.strMeasure2}
              </p>
              <p className="ingr">
                {slide.strIngredient3} - {slide.strMeasure3}
              </p>
              <p className="ingr">
                {slide.strIngredient4} - {slide.strMeasure4}
              </p>
              <p className="ingr">
                {slide.strIngredient5} - {slide.strMeasure5}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }
}
