import React, { useContext, useState } from 'react';
import MyContext from '../context/Context';
import styles from '../modules/DoneRecipes.module.css';
import { getDoneRecipes } from '../services/localStorageDoneRecipes';

function Button() {
  const [All, setAll] = useState(true);
  const [Food, setFood] = useState(false);
  const [Drink, setDrink] = useState(false);
  const { setFinishedRecipes } = useContext(MyContext);
  return (
    <div className={ styles.categories }>
      <button
        className={ All ? styles.categoryActive : styles.category }
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => {
          setFood(false);
          setDrink(false);
          setAll(true);
          setFinishedRecipes(getDoneRecipes('All'));
        } }
      >
        All
      </button>
      <button
        className={ Food ? styles.categoryActive : styles.category }
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => {
          setFood(true);
          setDrink(false);
          setAll(false);
          setFinishedRecipes(getDoneRecipes('Food'));
        } }
      >
        Food
      </button>
      <button
        className={ Drink ? styles.categoryActive : styles.category }
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => {
          setFood(false);
          setDrink(true);
          setAll(false);
          setFinishedRecipes(getDoneRecipes('Drinks'));
        } }
      >
        Drinks
      </button>

    </div>
  );
}

export default Button;
