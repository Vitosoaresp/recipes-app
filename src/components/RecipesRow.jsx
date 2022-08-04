import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../modules/Browser.module.css';

export default function RecipesRow({ recipes, type }) {
  return (
    <Link
      to={ type === 'meal' ? `/foods/${recipes.idMeal}` : `/drinks/${recipes.idDrink}` }
      className={ styles.recipeCard }
    >
      <div>
        <img
          src={ type === 'meal' ? recipes.strMealThumb : recipes.strDrinkThumb }
          alt={ type === 'meal' ? recipes.strMeal : recipes.strDrink }
          width="130px"
        />
      </div>
      <p className={ styles.name }>
        {type === 'meal' ? recipes.strMeal : recipes.strDrink }
      </p>
    </Link>
  );
}

RecipesRow.propTypes = {
  recipes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  type: PropTypes.string.isRequired,
};
