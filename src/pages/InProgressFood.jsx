import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MyContext from '../context/Context';
import { saveDoneRecipes } from '../services/localStorageDoneRecipes';

function InProgressFood({ match }) {
  const history = useHistory();
  const { foodsAPI } = useContext(MyContext);

  const saveRecipe = (id) => {
    saveDoneRecipes(foodsAPI, 'food', '', id);
    return history.push('/done-recipes');
  };

  const { params: { id } } = match;

  return (
    <div>
      <h1>InProgressFood</h1>
      <button
        type="button"
        onClick={ () => saveRecipe(id) }
      >
        Finish Recipe
      </button>
    </div>
  );
}

InProgressFood.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default InProgressFood;
