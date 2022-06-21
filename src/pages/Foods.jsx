import React, { useContext } from 'react';
import CardRecipes from '../components/CardRecipes';
import Header from '../components/Header';
import MyContext from '../context/Context';

function Foods() {
  const { foodsAPI } = useContext(MyContext);
  const TWELVE = 12;
  return (
    <>
      <Header title="Foods" />
      <main>
        { foodsAPI
          && foodsAPI.slice(0, TWELVE)
            .map(({ idMeal, strMeal, strMealThumb }, index) => (
              <CardRecipes
                index={ index }
                key={ idMeal }
                strThumb={ strMealThumb }
                strTitle={ strMeal }
              />
            ))}
      </main>
    </>
  );
}

export default Foods;
