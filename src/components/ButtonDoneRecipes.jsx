import React, { useContext } from 'react';
import MyContext from '../context/Context';
import { getDoneRecipes } from '../services/localStorageDoneRecipes';

function Button() {
  const { setFinishedRecipes } = useContext(MyContext);

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ ({ target }) => {
          setFinishedRecipes(getDoneRecipes(target));
        } }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ ({ target }) => {
          setFinishedRecipes(getDoneRecipes(target));
        } }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ ({ target }) => {
          setFinishedRecipes(getDoneRecipes(target));
        } }
      >
        Drinks
      </button>

    </div>
  );
}

export default Button;
