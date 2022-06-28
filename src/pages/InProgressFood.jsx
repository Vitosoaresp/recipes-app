import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MyContext from '../context/Context';
import { saveDoneRecipes } from '../services/localStorageDoneRecipes';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { getFoodDetails } from '../services/fetchFoodsAndDrinks';
import { favoriteRecipe, checkButton } from '../services/inProgressPage';

function InProgressFood({ match }) {
  const history = useHistory();
  const {
    favoritos,
    setFavoritos, inProgressRecipes, setInProgressRecipes } = useContext(MyContext);
  const [copied, setCopied] = useState(false);
  const [render, setRender] = useState([]);
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const { idMeal } = render;

  const handleClick = () => {
    favoriteRecipe(render, favoritos, setFavoritos);
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

  const handleChangeFoods = ({ target }) => {
    checkButton(setbuttonDisabled);
    if (!target.checked) {
      const remove = inProgressRecipes.meals[`${idMeal}`]
        .filter(
          (removeRecipe) => target.value !== removeRecipe,
        );
      setInProgressRecipes(
        { ...inProgressRecipes, meals: { [idMeal]: [...remove] } },
      );
      if (inProgressRecipes.meals[`${idMeal}`].length === 1) {
        setInProgressRecipes(
          { ...inProgressRecipes, meals: {} },
        );
        return;
      }
      return;
    }
    if (inProgressRecipes.meals === undefined || !Object
      .keys(inProgressRecipes.meals)
      .includes(`${idMeal}`)) {
      setInProgressRecipes(
        { ...inProgressRecipes, meals: { [idMeal]: [target.value] } },
      );
      return;
    }
    const recipe = inProgressRecipes.meals[`${idMeal}`];
    setInProgressRecipes(
      { ...inProgressRecipes, meals: { [idMeal]: [...recipe, target.value] } },
    );
  };

  const saveRecipe = (id) => {
    saveDoneRecipes(render, 'food', '', id);
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
                <label
                  htmlFor={ `${i}-ingredient` }
                >
                  <input
                    checked={ inProgressRecipes.meals[`${idMeal}`] !== undefined
                      && inProgressRecipes.meals[`${idMeal}`].includes(i.toString()) }
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
          disabled={ buttonDisabled }
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
