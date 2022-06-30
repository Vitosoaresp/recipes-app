import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';
import { saveDoneRecipes } from '../services/localStorageDoneRecipes';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { getDrinkDetails } from '../services/fetchFoodsAndDrinks';
import { favoriteRecipeDrinks, checkButton } from '../services/inProgressPage';

function InProgressDrink({ match }) {
  const history = useHistory();
  const {
    favoritos,
    setFavoritos, inProgressRecipes, setInProgressRecipes } = useContext(MyContext);
  const [copied, setCopied] = useState(false);
  const [render, setRender] = useState([]);
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const { idDrink } = render;

  const handleChangeDrinks = ({ target }) => {
    checkButton(setbuttonDisabled);
    if (!target.checked) {
      const remove = inProgressRecipes.cocktails[`${idDrink}`]
        .filter(
          (removeRecipe) => target.value !== removeRecipe,
        );
      setInProgressRecipes(
        { ...inProgressRecipes, cocktails: { [idDrink]: [...remove] } },
      );
      if (inProgressRecipes.cocktails[`${idDrink}`].length === 1) {
        setInProgressRecipes(
          { ...inProgressRecipes, cocktails: {} },
        );
        return;
      }
      return;
    }
    if (inProgressRecipes.cocktails === undefined || !Object
      .keys(inProgressRecipes.cocktails)
      .includes(`${idDrink}`)) {
      setInProgressRecipes(
        { ...inProgressRecipes, cocktails: { [idDrink]: [target.value] } },
      );
      return;
    }
    const recipe = inProgressRecipes.cocktails[`${idDrink}`];
    console.log(recipe);
    setInProgressRecipes(
      { ...inProgressRecipes, cocktails: { [idDrink]: [...recipe, target.value] } },
    );
  };

  const handleClick = () => {
    favoriteRecipeDrinks(render, favoritos, setFavoritos);
  };

  useEffect(() => {
    const { params: { id } } = match;
    const fetchData = async () => {
      const data = await getDrinkDetails(id);
      setRender(data[0]);
    };
    fetchData();
  }, [history, setRender, match]);

  const {
    strDrinkThumb,
    strDrink,
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

  const saveRecipeDrink = (id) => {
    // const recipeMade = drinksAPI.filter(({ idDrink: drinkId }) => drinkId === id);
    saveDoneRecipes(render, 'drink', render.strAlcoholic, id);
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
          src={ favoritos.find((favRecipe) => favRecipe.id === idDrink)
            ? 'blackHeartIcon' : 'whiteHeartIcon' }
          type="button"
          data-testid="favorite-btn"
          onClick={ handleClick }
        >
          <img
            id="favorites"
            src={ favoritos.find((favRecipe) => favRecipe.id === idDrink)
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
                    key={ i }
                    defaultChecked={ inProgressRecipes
                      .cocktails[`${idDrink}`] !== undefined
                  && inProgressRecipes.cocktails[`${idDrink}`].includes(i.toString()) }
                    value={ i }
                    onChange={ handleChangeDrinks }
                    type="checkbox"
                    id={ `${i}-ingredient` }
                  />
                  {element}
                </label>
              </li>
            );
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
