import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MyContext from '../context/Context';
import { saveDoneRecipes } from '../services/localStorageDoneRecipes';
import { handleChangeFoods } from '../services/inProgressPage';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { getFoodDetails } from '../services/fetchFoodsAndDrinks';

function InProgressFood({ match }) {
  const history = useHistory();
  const { foodsAPI, favoritos, setFavoritos } = useContext(MyContext);
  const [copied, setCopied] = useState(false);
  const [render, setRender] = useState([]);

  const favoriteRecipe = ({ strCategory, idMeal, strMeal, strMealThumb, strArea }) => {
    const favRecipeModel = {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };
    const check = favoritos.find((recipeFav) => recipeFav.id === idMeal);
    if (check) {
      const remove = favoritos.filter((favRecipe) => favRecipe.id !== idMeal);
      setFavoritos([...remove]);
    } else {
      setFavoritos([...favoritos, { ...favRecipeModel }]);
    }
  };

  const handleClick = () => {
    favoriteRecipe(render);
    const img = document.getElementById('favorites');
    const START_INDEX = 21;
    const imgSrc = img.src.slice(START_INDEX);
    if (imgSrc === whiteHeartIcon) {
      img.setAttribute('src', blackHeartIcon);
      return;
    }
    img.setAttribute('src', whiteHeartIcon);
  };

  useEffect(() => {
    const { params: { id } } = match;
    const fetchData = async () => {
      const data = await getFoodDetails(id);
      setRender(data[0]);
    };
    fetchData();
  }, [history, setRender, match]);

  const {
    strMealThumb,
    strMeal,
    strCategory,
    idMeal,
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
  } = render;

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

  const saveRecipe = (id) => {
    saveDoneRecipes(foodsAPI, 'food', '', id);
    return history.push('/done-recipes');
  };

  const { params: { id } } = match;
  return (
    <div>
      <section>
        <img src={ strMealThumb } alt="Imagem da receita" data-testid="recipe-photo" />
        <h2 data-testid="recipe-title">{strMeal}</h2>
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
              .writeText(`http://localhost:3000/foods/${idMeal}`);
          } }
        >
          <img src={ shareIcon } alt="button" />

        </button>
        {copied && <span>Link copied!</span>}
        <button
          src={ favoritos.find((favRecipe) => favRecipe.id === idMeal)
            ? 'blackHeartIcon' : 'whiteHeartIcon' }
          type="button"
          data-testid="favorite-btn"
          onClick={ handleClick }
        >
          <img
            id="favorites"
            src={ favoritos.find((favRecipe) => favRecipe.id === idMeal)
              ? blackHeartIcon : whiteHeartIcon }
            alt="button"
          />

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
                <label htmlFor={ `${i}-ingredient` }>
                  <input
                    value={ i }
                    onChange={ handleChangeFoods }
                    type="checkbox"
                    id={ `${i}-ingredient` }
                  />
                  {element}
                </label>
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
          onClick={ () => saveRecipe(id) }
        >
          Finish Recipe
        </button>
      </section>
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
