import React from 'react';
import PropTypes from 'prop-types';

function CardRecipes({ strTitle, strThumb, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        src={ strThumb }
        alt={ `Receita de ${strTitle}` }
        data-testid={ `${index}-card-img` }
      />
      <p data-testid={ `${index}-card-name` }>{strTitle}</p>
    </div>
  );
}

CardRecipes.propTypes = {
  strTitle: PropTypes.string.isRequired,
  strThumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CardRecipes;
