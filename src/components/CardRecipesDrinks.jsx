import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardRecipesDrinks({ recipes }) {
  const TWELVE = 12;
  return (
    <>
      {recipes.slice(0, TWELVE)
        .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
          <Link to={ `/drinks/${idDrink}` } key={ idDrink }>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                src={ strDrinkThumb }
                alt={ `Receita de ${strDrink}` }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{strDrink}</p>
            </div>
          </Link>
        ))}
    </>
  );
}

CardRecipesDrinks.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardRecipesDrinks;
