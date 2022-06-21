import React from 'react';
import PropTypes from 'prop-types';

function CardRecipesFoods({ recipes }) {
  const TWELVE = 12;
  return (
    <>
      {recipes.slice(0, TWELVE)
        .map(({ idMeal, strMeal, strMealThumb }, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ idMeal }>
            <img
              src={ strMealThumb }
              alt={ `Receita de ${strMeal}` }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{strMeal}</p>
          </div>
        ))}
    </>
  );
}

CardRecipesFoods.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardRecipesFoods;
