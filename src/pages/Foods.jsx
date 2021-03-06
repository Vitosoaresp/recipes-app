import React, { useContext } from 'react';
import CardRecipesFoods from '../components/CardRecipesFoods';
import CategoriesRecipes from '../components/CategoriesRecipes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/Context';
import styles from '../modules/Foods.module.css';

function Foods() {
  const {
    foodsAPI, categoriesFoods, recipesByFilter, categorySelect, response,
  } = useContext(MyContext);

  return (
    <>
      <Header title="Foods" />
      <main className={ styles.foodsContainer }>
        <CategoriesRecipes categories={ categoriesFoods } recipeType="foods" />
        { response !== null && response.length !== 0 ? (
          <CardRecipesFoods
            recipes={ response }
            dataTestid="recipe"
          />
        ) : (
          <CardRecipesFoods
            recipes={ categorySelect.type !== '' ? recipesByFilter : foodsAPI }
            dataTestid="recipe"
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Foods;
