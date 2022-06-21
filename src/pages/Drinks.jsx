import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/Context';
import CardRecipes from '../components/CardRecipes';
import CategoriesRecipes from '../components/CategoriesRecipes';

function Drinks() {
  const { drinksAPI, categoriesDrinks } = useContext(MyContext);
  const TWELVE = 12;

  return (
    <>
      <Header title="Drinks" />
      <main>
        <CategoriesRecipes categories={ categoriesDrinks } />
        { drinksAPI
        && drinksAPI.slice(0, TWELVE)
          .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
            <CardRecipes
              index={ index }
              key={ idDrink }
              strThumb={ strDrinkThumb }
              strTitle={ strDrink }
            />
          ))}
      </main>
    </>
  );
}

export default Drinks;
