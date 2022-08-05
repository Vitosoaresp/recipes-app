import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardRecipesDrinks from '../components/CardRecipesDrinks';
import styles from '../modules/ExploreRecipesIngredients.module.css';
import Preloader from '../components/Preloader';

function ExploreDrinkIngredients() {
  const [filter, setFilter] = useState('');
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const response = await request.json();
      let data = [];
      response.drinks.forEach((obj) => {
        data = [...data, {
          idDrink: obj.strIngredient1,
          strDrink: obj.strIngredient1,
          strDrinkThumb: `https://www.thecocktaildb.com/images/ingredients/${obj.strIngredient1}-Small.png`,
        }];
      });
      setIngredients(data);
    };
    fetchIngredients();
  }, []);

  const ingredientsFiltered = ingredients
    .filter(
      (ingredient) => ingredient.strDrink.toLowerCase().includes(filter.toLowerCase()),
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
            <CardRecipesDrinks
              recipes={ ingredientsFiltered }
              dataTestid="ingredient"
            />
          </>)}
      </main>
      <Footer />
    </>
  );
}

export default ExploreDrinkIngredients;
