import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';
import { saveDoneRecipes } from '../services/localStorageDoneRecipes';

function InProgressDrink({ match }) {
  const history = useHistory();
  const { drinksAPI } = useContext(MyContext);

  const saveRecipeDrink = (id) => {
    const recipeMade = drinksAPI.filter(({ idDrink }) => idDrink === id);
    saveDoneRecipes(drinksAPI, 'drink', recipeMade[0].strAlcoholic, id);
    return history.push('/done-recipes');
  };

  const { params: { id } } = match;

  return (
    <div>
      <h1>InProgressDrink</h1>
      <button
        type="button"
        onClick={ () => saveRecipeDrink(id) }
      >
        Finish Recipe
      </button>
    </div>
  );
}

InProgressDrink.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default InProgressDrink;
