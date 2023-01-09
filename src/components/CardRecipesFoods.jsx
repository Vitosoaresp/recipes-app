import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/Context';
import styles from '../modules/CardMealsAndDrinks.module.css';
import handleClickButton from '../services/helpsSearch';

function CardRecipesFoods({ recipes, dataTestid }) {
  const { setResponse } = useContext(MyContext);
  const MAX_RECIPES = 50;

  const searchIngredient = (search) => {
    const obj = {
      pathname: '/foods',
      search,
      radio: 'ingredient',
      setResponse,
    };
    handleClickButton(obj);
  };

  return (
    <div className={ styles.cardsRecipe }>
      {recipes.slice(0, MAX_RECIPES)
        .map(({ idMeal, strMeal, strMealThumb }, index) => (
          <Link
            to={ `/foods/${idMeal}` }
            key={ idMeal }
            className={ styles.cardRecipe }
            onClick={ () => searchIngredient(strMeal) }
          >
            <div
              data-testid={ `${index}-${dataTestid}-card` }
            >
              <img
                width="200px"
                src={ strMealThumb }
                alt={ `Receita de ${strMeal}` }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{strMeal}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

CardRecipesFoods.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default CardRecipesFoods;
