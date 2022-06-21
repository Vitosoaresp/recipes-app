import React from 'react';
import PropTypes from 'prop-types';

function CategoriesRecipes({ categories }) {
  const FIVE = 5;

  return (
    <>
      { categories.map((category) => Object.values(category))
        .slice(0, FIVE)
        .map((categoryName) => (
          <button
            type="button"
            key={ categoryName }
            data-testid={ `${categoryName}-category-filter` }
          >
            {categoryName}

          </button>
        ))}
    </>
  );
}

CategoriesRecipes.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesRecipes;
