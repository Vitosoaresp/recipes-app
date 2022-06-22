import React, { useContext } from 'react';
import CardRecipesFoods from '../components/CardRecipesFoods';
import CategoriesRecipes from '../components/CategoriesRecipes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/Context';

function Foods() {
  const {
    foodsAPI, categoriesFoods, recipesByFilter, categorySelect, response,
  } = useContext(MyContext);

  return (
    <>
      <Header title="Foods" />
      <main>
        <div>
          <CategoriesRecipes categories={ categoriesFoods } recipeType="foods" />
        </div>
        <div>
          { response.length !== 0 ? (
            <CardRecipesFoods
              recipes={ response }
            />
          ) : (
            <CardRecipesFoods
              recipes={ categorySelect.type !== '' ? recipesByFilter : foodsAPI }
            />
          )}
        </div>
      </main>
      <section>
        {/* {response !== null && response.map((recipe, i) => {
          const { strMealThumb, strMeal } = recipe;
          return (
            <div
              key={ i }
              data-testid={ `${i}-recipe-card` }
            >
              <img
                src={ strMealThumb }
                alt="recipe"
                data-testid={ `${i}-card-img` }
              />
              <p data-testid={ `${i}-card-name` }>{strMeal}</p>
            </div>
          );
        })} */}
      </section>
      <Footer />
    </>
  );
}

export default Foods;
