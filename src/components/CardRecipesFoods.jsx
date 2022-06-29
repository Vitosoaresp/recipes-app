import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import handleClickButton from '../services/helpsSearch';
import MyContext from '../context/Context';
import styles from '../modules/CardMealsAndDrinks.module.css';

function CardRecipesFoods({ recipes, dataTestid }) {
  const TWELVE = 12;
  const { setResponse } = useContext(MyContext);

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
      {recipes.slice(0, TWELVE)
        .map(({ idMeal, strMeal, strMealThumb }, index) => (
          <Link
            to={ `/foods/${idMeal <= JSON.stringify(TWELVE) ? '' : idMeal}` }
            key={ idMeal }
            onClick={ () => idMeal <= JSON.stringify(TWELVE)
              && searchIngredient(strMeal) }
          >
            <div
              data-testid={ `${index}-${dataTestid}-card` }
              className={ styles.cardRecipe }
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
