import React, { useContext } from 'react';
import CardRecipesFoods from '../components/CardRecipesFoods';
import CategoriesRecipes from '../components/CategoriesRecipes';
import Header from '../components/Header';
import MyContext from '../context/Context';

function Foods() {
  const {
    foodsAPI, categoriesFoods, recipesByFilter, categorySelect,
  } = useContext(MyContext);

  return (
    <>
      <Header title="Foods" />
      <main>
        <div>
          <CategoriesRecipes categories={ categoriesFoods } recipeType="foods" />
        </div>
        <div>
          <CardRecipesFoods
            recipes={ categorySelect.type !== '' ? recipesByFilter : foodsAPI }
          />
        </div>
      </main>
    </>
  );
}

export default Foods;
