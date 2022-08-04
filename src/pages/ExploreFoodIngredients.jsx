import React, { useContext, useEffect, useState } from 'react';
import CardRecipesFoods from '../components/CardRecipesFoods';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Preloader from '../components/Preloader';
import MyContext from '../context/Context';
import styles from '../modules/ExploreRecipesIngredients.module.css';

function ExploreFoodIngredients() {
  const { setIngredients, ingredients } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
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
      setLoading(false);
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
            <CardRecipesFoods
              recipes={ ingredientsFiltered }
              dataTestid="ingredient"
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ExploreFoodIngredients;
