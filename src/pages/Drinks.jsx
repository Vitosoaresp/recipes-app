import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/Context';
import CardRecipesDrinks from '../components/CardRecipesDrinks';
import CategoriesRecipes from '../components/CategoriesRecipes';

function Drinks() {
  const {
    drinksAPI, categoriesDrinks, categorySelect, recipesByFilter,
  } = useContext(MyContext);

  return (
    <>
      <Header title="Drinks" />
      <main>
        <div>
          <CategoriesRecipes categories={ categoriesDrinks } recipeType="drinks" />
        </div>
        <div>
          {/* Atenção: Caso a categoria retorne apenas um resultado, NÃO deve ser feito o redirecionamento para a página de detalhes. */}
          <CardRecipesDrinks
            recipes={ categorySelect.type !== '' ? recipesByFilter : drinksAPI }
          />
        </div>
      </main>
    </>
  );
}

export default Drinks;
