import React from 'react';
import PropTypes from 'prop-types';
import styles from '../modules/DoneRecipes.module.css';

function ButtonDoneRecipes({ filter, selectFilter }) {
  return (
    <div className={ styles.categories }>
      <button
        className={ filter === 'All' ? styles.categoryActive : styles.category }
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => selectFilter('All') }
      >
        All
      </button>
      <button
        className={ filter === 'Food' ? styles.categoryActive : styles.category }
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => selectFilter('Food') }
      >
        Foods
      </button>
      <button
        className={ filter === 'Drink' ? styles.categoryActive : styles.category }
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => selectFilter('Drink') }
      >
        Drinks
      </button>
    </div>
  );
}

ButtonDoneRecipes.propTypes = {
  filter: PropTypes.func.isRequired,
  selectFilter: PropTypes.func.isRequired,
};

export default ButtonDoneRecipes;
