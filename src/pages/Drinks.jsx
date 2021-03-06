import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/Context';
import CardRecipesDrinks from '../components/CardRecipesDrinks';
import CategoriesRecipes from '../components/CategoriesRecipes';
import styles from '../modules/Drinks.module.css';
import Footer from '../components/Footer';

function Drinks() {
  const {
    drinksAPI, categoriesDrinks, categorySelect, recipesByFilter, response,
  } = useContext(MyContext);

  return (
    <>
      <Header title="Drinks" />
      <main className={ styles.drinksContainer }>
        <CategoriesRecipes categories={ categoriesDrinks } recipeType="drinks" />
        { response !== null && response.length !== 0 ? (
          <CardRecipesDrinks
            recipes={ response }
            dataTestid="recipe"
          />
        ) : (
          <CardRecipesDrinks
            recipes={ categorySelect.type !== '' ? recipesByFilter : drinksAPI }
            dataTestid="recipe"
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Drinks;
