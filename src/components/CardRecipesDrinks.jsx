import React from 'react';
import PropTypes from 'prop-types';

function CardRecipesDrinks({ recipes }) {
  const TWELVE = 12;
  return (
    <>
      {recipes.slice(0, TWELVE)
        .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ idDrink }>
            <img
              src={ strDrinkThumb }
              alt={ `Receita de ${strDrink}` }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{strDrink}</p>
          </div>
        ))}
    </>
  );
}

CardRecipesDrinks.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardRecipesDrinks;
