import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';

function CategoriesRecipes({ categories, recipeType }) {
  const { setCategorySelect, categorySelect } = useContext(MyContext);
  const FIVE = 5;

  const handleClick = (categoryName) => {
    if (categoryName[0] === categorySelect.category) {
      return setCategorySelect({ type: '', category: '' });
    }
    setCategorySelect({ type: recipeType, category: categoryName[0] });
  };

  return (
    <>
      { categories.map((category) => Object.values(category))
        .slice(0, FIVE)
        .map((categoryName) => (
          <button
            type="button"
            key={ categoryName }
            data-testid={ `${categoryName}-category-filter` }
            onClick={ () => handleClick(categoryName) }
          >
            {categoryName}

          </button>
        ))}
    </>
  );
}

CategoriesRecipes.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default CategoriesRecipes;
