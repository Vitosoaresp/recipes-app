import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardRecipesFoods({ recipes }) {
  const TWELVE = 12;
  return (
    <>
      {recipes.slice(0, TWELVE)
        .map(({ idMeal, strMeal, strMealThumb }, index) => (
          <Link to={ `/foods/${idMeal}` } key={ idMeal }>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ strMealThumb }
                alt={ `Receita de ${strMeal}` }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{strMeal}</p>
            </div>
          </Link>
        ))}
    </>
  );
}

CardRecipesFoods.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardRecipesFoods;
