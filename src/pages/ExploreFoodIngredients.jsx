import React, { useEffect, useState } from 'react';
import CardRecipesFoods from '../components/CardRecipesFoods';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Preloader from '../components/Preloader';
import styles from '../modules/ExploreRecipesIngredients.module.css';

function ExploreFoodIngredients() {
  const [filter, setFilter] = useState('');
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const response = await request.json();
      let data = [];
      response.meals.forEach((obj) => {
        data = [...data, {
          idMeal: obj.idIngredient,
          strMeal: obj.strIngredient,
          strMealThumb: `https://www.themealdb.com/images/ingredients/${obj.strIngredient}-Small.png`,
        }];
      });
      setIngredients(data);
    };
    fetchIngredients();
  }, []);

  const ingredientsFiltered = ingredients
    .filter(
      (ingredient) => ingredient.strMeal.toLowerCase().includes(filter.toLowerCase()),
    );

  return (
    <>
      <Header title="Explore Ingredients" />
      { ingredients.length === 0 && <Preloader />}
      <main className={ styles.container }>
        { ingredients.length > 0 && (
          <>
            <input
              type="text"
              value={ filter }
              className={ styles.input }
              onChange={ (e) => setFilter(e.target.value) }
              placeholder="Busque por um ingrediente"
            />
            <CardRecipesFoods
              recipes={ ingredientsFiltered }
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ExploreFoodIngredients;
