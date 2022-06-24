import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';
import { saveDoneRecipes } from '../services/localStorageDoneRecipes';
import { drink } from '../services/mockReturnApi';
import { handleChangeDrinks } from '../services/inProgressPage';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function InProgressDrink({ match }) {
  const history = useHistory();
  const { drinksAPI } = useContext(MyContext);
  const [copied, setCopied] = useState(false);
  const { src, setSrc } = useContext(MyContext);

  const handleClick = () => {
    const img = document.getElementById('favorites');
    const START_INDEX = 21;
    const imgSrc = img.src.slice(START_INDEX);
    if (imgSrc === whiteHeartIcon) {
      img.setAttribute('src', blackHeartIcon);
      setSrc('blackHeartIcon');
      return;
    }
    img.setAttribute('src', whiteHeartIcon);
    setSrc('whiteHeartIcon');
  };
  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    idDrink,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  } = drink;
  const ingredientsArray = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10];

  const saveRecipeDrink = (id) => {
    const recipeMade = drinksAPI.filter(({ idDrink: drinkId }) => drinkId === id);
    saveDoneRecipes(drinksAPI, 'drink', recipeMade[0].strAlcoholic, id);
    return history.push('/done-recipes');
  };

  const { params: { id } } = match;

  return (
    <div>
      <section>
        <img src={ strDrinkThumb } alt="Imagem da receita" data-testid="recipe-photo" />
        <h2 data-testid="recipe-title">{strDrink}</h2>
        <p data-testid="recipe-category">{strCategory}</p>
      </section>
      <section>
        <button
          src={ shareIcon }
          type="button"
          data-testid="share-btn"
          onClick={ () => {
            const milliSeconds = 2000;
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, milliSeconds);
            navigator
              .clipboard
              .writeText(`http://localhost:3000/drinks/${idDrink}`);
          } }
        >
          <img src={ shareIcon } alt="button" />

        </button>
        {copied && <span>Link copied!</span>}
        <button
          src={ src }
          type="button"
          data-testid="favorite-btn"
          onClick={ handleClick }
        >
          <img src={ whiteHeartIcon } alt="button" />

        </button>
      </section>
      <section>
        <h2>Ingredients</h2>
        <ul>
          {ingredientsArray.map((element, i) => {
            if (element === null || element === '') {
              return null;
            }
            return (
              <li
                data-testid={ `${i}-ingredient-step` }
                key={ i }
              >
                <input
                  checked
                  value={ i }
                  onChange={ handleChangeDrinks }
                  type="checkbox"
                  id={ `${i}-ingredient` }
                />
                {element}
              </li>);
          })}
        </ul>
      </section>
      <section>
        <h2>Instructions</h2>
        <p data-testid="instructions">{strInstructions}</p>
      </section>
      <section>
        <button
          data-testid="finish-recipe-btn"
          type="button"
          onClick={ () => saveRecipeDrink(id) }
        >
          Finish Recipe
        </button>
      </section>
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
