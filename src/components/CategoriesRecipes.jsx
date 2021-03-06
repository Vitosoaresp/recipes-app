import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';
import styles from '../modules/CardMealsAndDrinks.module.css';

function CategoriesRecipes({ categories, recipeType }) {
  const {
    setCategorySelect, categorySelect, setResponse, setShowInput,
  } = useContext(MyContext);
  const FIVE = 5;

  const handleClick = (categoryName) => {
    setShowInput(false);
    setResponse([]);
    if (categoryName[0] === categorySelect.category || categoryName === 'all') {
      return setCategorySelect({ type: '', category: '' });
    }
    setCategorySelect({ type: recipeType, category: categoryName[0] });
  };

  return (
    <div className={ styles.categories }>
      <button
        className={ categorySelect.category === ''
          ? styles.categoryActive : styles.category }
        type="button"
        data-testid="All-category-filter"
        onClick={ () => handleClick('all') }
      >
        All
      </button>
      { categories.map((category) => Object.values(category))
        .slice(0, FIVE)
        .map((categoryName) => (
          <button
            // className={ styles.category }
            className={ categorySelect.category === categoryName[0]
              ? styles.categoryActive : styles.category }
            type="button"
            key={ categoryName }
            data-testid={ `${categoryName}-category-filter` }
            onClick={ () => handleClick(categoryName) }
          >
            {categoryName}

          </button>
        ))}
    </div>
  );
}

CategoriesRecipes.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default CategoriesRecipes;
