import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/Context';
import CardRecipesDrinks from '../components/CardRecipesDrinks';
import CategoriesRecipes from '../components/CategoriesRecipes';
import Footer from '../components/Footer';

function Drinks() {
  const {
    drinksAPI, categoriesDrinks, categorySelect, recipesByFilter, response,
  } = useContext(MyContext);

  return (
    <>
      <Header title="Drinks" />
      <main>
        <div>
          <CategoriesRecipes categories={ categoriesDrinks } recipeType="drinks" />
        </div>
        <div>
          { response !== null && response.length !== 0 ? (
            <CardRecipesDrinks
              recipes={ response }
            />
          ) : (
            <CardRecipesDrinks
              recipes={ categorySelect.type !== '' ? recipesByFilter : drinksAPI }
            />
          )}
        </div>
      </main>
      {/* <section>
        {response !== null && response.map((recipe, i) => {
          const { strDrinkThumb, strDrink } = recipe;
          const MAX_INDEX = 11;
          if (i > MAX_INDEX) {
            return null;
          }
          return (
            <div
              key={ i }
              data-testid={ `${i}-recipe-card` }
            >
              <img
                src={ strDrinkThumb }
                alt="recipe"
                data-testid={ `${i}-card-img` }
              />
              <p data-testid={ `${i}-card-name` }>{strDrink}</p>
            </div>
          );
        })}
      </section> */}
      <Footer />
    </>
  );
}

export default Drinks;
