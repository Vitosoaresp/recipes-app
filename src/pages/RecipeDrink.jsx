import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';
import { getDrinkDetails } from '../services/fetchFoodsAndDrinks';
import RecomendedCarrousel from '../components/RecomendedCarrousel/RecomendedCarrousel';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function RecipeDrink({ match }) {
  const history = useHistory();
  const { params: { id } } = match;
  const {
    recipeDetails, setRecipeDetails, foodsAPI, favoritos, setFavoritos,
  } = useContext(MyContext);
  const [details, setDetails] = useState({
    ingredients: [], measures: [],
  });
  const [copiedLink, setCopiedLink] = useState(false);
  const inProgressGetByStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const doneRecipesByStorage = JSON.parse(localStorage.getItem('doneRecipes'));

  const ARRAY_NUMBERS = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', '11', '12', '13', '14', '15'];
  const SIX = 6;

  useEffect(() => {
    const getRecipeDetails = async () => {
      const drinkDetails = await getDrinkDetails(id);
      const ingredients = ARRAY_NUMBERS
        .map((numb) => drinkDetails[0][`strIngredient${numb}`]);
      const measures = ARRAY_NUMBERS
        .map((numb) => drinkDetails[0][`strMeasure${numb}`]);
      setDetails({ ingredients, measures });
      setRecipeDetails(drinkDetails);
    };
    getRecipeDetails();
  }, [id]);

  const handleClickToShare = () => {
    const SEGUNDOS = 2000;
    setCopiedLink(true);
    setTimeout(() => {
      setCopiedLink(false);
    }, SEGUNDOS);
    navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
  };

  const favoriteRecipe = (strCategory, strDrink, strDrinkThumb, strAlcoholic) => {
    const favRecipeModel = {
      id,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    const check = favoritos.find((recipeFav) => recipeFav.id === id);
    if (check) {
      const remove = favoritos.filter((favRecipe) => favRecipe.id !== id);
      setFavoritos([...remove]);
    } else {
      setFavoritos([...favoritos, { ...favRecipeModel }]);
    }
  };

  const startRecipeDrink = () => {
    history.push(`/drinks/${id}/in-progress`);
  };

  return (
    <main>
      { recipeDetails
        .map(({
          idDrink,
          strDrink,
          strDrinkThumb,
          strCategory,
          strInstructions,
          strAlcoholic,
        }) => (
          <div key={ idDrink }>
            <div>
              <img
                data-testid="recipe-photo"
                src={ strDrinkThumb }
                alt={ strDrink }
                width="150px"
              />
            </div>
            <p data-testid="recipe-title">{strDrink}</p>
            <button
              type="button"
              data-testid="share-btn"
              onClick={ () => handleClickToShare() }
            >
              <img src={ shareIcon } alt="Icone de compartilhar" />
              {copiedLink && <span>Link copiado!</span>}
            </button>
            <button
              type="button"
              onClick={ () => favoriteRecipe(
                strCategory, strDrink, strDrinkThumb, strAlcoholic,
              ) }
            >
              <img
                data-testid="favorite-btn"
                src={ favoritos.find((favRecipe) => favRecipe.id === idDrink)
                  ? blackHeartIcon : whiteHeartIcon }
                alt="Icone de Favoritar"
              />
            </button>
            <span data-testid="recipe-category">{ strCategory }</span>
            <span data-testid="recipe-category">{strAlcoholic}</span>
            <ul>
              { details.ingredients.map((ingredient, index) => (
                ingredient !== null
                  && (
                    <li
                      key={ index }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      {
                        `${ingredient} -
                        ${details.measures[index] !== null
                      ? details.measures[index] : ''}`
                      }
                    </li>
                  )
              ))}
            </ul>
            <p data-testid="instructions">{strInstructions}</p>
            <div>
              receitas recomendadas
              <RecomendedCarrousel
                recipes={ foodsAPI.slice(0, SIX) }
                type="foods"
              />
            </div>
            { doneRecipesByStorage !== null
              ? doneRecipesByStorage.map((recipe) => recipe.id !== id && (
                <button
                  type="button"
                  style={ { position: 'fixed', bottom: 0 } }
                  onClick={ () => startRecipeDrink() }
                  data-testid="start-recipe-btn"
                >
                  Start Recipe
                </button>
              )) : (
                <button
                  type="button"
                  style={ { position: 'fixed', bottom: 0 } }
                  data-testid="start-recipe-btn"
                  onClick={ () => startRecipeDrink() }
                >
                  { inProgressGetByStorage === null
                || inProgressGetByStorage.cocktails[id] === null
                    ? 'Start Recipe'
                    : 'Continue Recipe'}
                </button>
              )}
          </div>
        ))}
    </main>
  );
}

RecipeDrink.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RecipeDrink;
