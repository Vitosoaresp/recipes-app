import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardRecipesDrinks from '../components/CardRecipesDrinks';
import MyContext from '../context/Context';
import styles from '../modules/ExploreRecipesIngredients.module.css';
import Preloader from '../components/Preloader';

function ExploreDrinkIngredients() {
  const { setIngredients, ingredients } = useContext(MyContext);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

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
      setLoading(false);
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
      { loading && <Preloader />}
      <main className={ styles.container }>
        { !loading && (
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
