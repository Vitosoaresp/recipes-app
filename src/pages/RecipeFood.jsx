import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';
import { getFoodDetails } from '../services/fetchFoodsAndDrinks';
import RecomendedCarrousel from '../components/RecomendedCarrousel/RecomendedCarrousel';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function RecipeFood({ match }) {
  const history = useHistory();
  const { params: { id } } = match;
  const {
    recipeDetails, setRecipeDetails, drinksAPI, favoritos, setFavoritos,
  } = useContext(MyContext);
  const [details, setDetails] = useState({
    ingredients: [], measures: [], youtubeId: '',
  });
  const [copiedLink, setCopiedLink] = useState(false);
  const doneRecipesByStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const inProgressGetByStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const ARRAY_NUMBERS = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  const SIX = 6;

  const handleClickToShare = () => {
    const SEGUNDOS = 2000;
    setCopiedLink(true);
    setTimeout(() => {
      setCopiedLink(false);
      console.log('aqui');
    }, SEGUNDOS);
    navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
  };

  useEffect(() => {
    const getRecipeDetails = async () => {
      const foodDetails = await getFoodDetails(id);
      const youtubeId = foodDetails[0].strYoutube.split('v=')[1];
      const ingredients = ARRAY_NUMBERS
        .map((numb) => foodDetails[0][`strIngredient${numb}`]);
      const measures = ARRAY_NUMBERS
        .map((numb) => foodDetails[0][`strMeasure${numb}`]);
      setDetails({ ingredients, youtubeId, measures });
      setRecipeDetails(foodDetails);
    };
    getRecipeDetails();
  }, [id]);

  const favoriteRecipe = (strCategory, idMeal, strMeal, strMealThumb) => {
    const favRecipeModel = {
      id: idMeal,
      type: 'food',
      nationality: '',
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

  const startRecipeFood = () => {
    history.push(`/foods/${id}/in-progress`);
  };

  return (
    <main>
      { recipeDetails
        .map(({
          idMeal,
          strMeal,
          strMealThumb,
          strYoutube,
          strCategory,
          strInstructions,
        }) => (
          <div key={ idMeal }>
            <div>
              <img
                data-testid="recipe-photo"
                src={ strMealThumb }
                alt={ strMeal }
                width="150px"
              />
            </div>
            <p data-testid="recipe-title">{strMeal}</p>
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
              data-testid="favorite-btn"
              onClick={ () => favoriteRecipe(strCategory, idMeal, strMeal, strMealThumb) }
            >
              <img
                data-testid="favorite-btn"
                src={ favoritos.find((favRecipe) => favRecipe.id === idMeal)
                  ? blackHeartIcon : whiteHeartIcon }
                alt="Icone de Favoritar"
              />
            </button>
            <span data-testid="recipe-category">{ strCategory }</span>
            <ul>
              { details.ingredients.map((ingredient, index) => (
                ingredient !== ''
                  && (
                    <li
                      key={ ingredient }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      {`${ingredient} - ${details.measures[index]}`}
                    </li>
                  )
              ))}
            </ul>
            <p data-testid="instructions">{strInstructions}</p>
            <div>
              <iframe
                data-testid="video"
                title={ strYoutube }
                width="350"
                height="300"
                src={ `https://www.youtube.com/embed/${details.youtubeId}` }
              />
            </div>
            <div>
              receitas recomendadas
              <RecomendedCarrousel
                recipes={ drinksAPI.slice(0, SIX) }
                type="drink"
              />
            </div>
            { doneRecipesByStorage !== null
              ? doneRecipesByStorage.map((recipe) => recipe.id !== id && (
                <button
                  type="button"
                  style={ { position: 'fixed', bottom: 0 } }
                  data-testid="start-recipe-btn"
                  onClick={ () => startRecipeFood() }
                >
                  Start Recipe
                </button>
              )) : (
                <button
                  type="button"
                  style={ { position: 'fixed', bottom: 0 } }
                  onClick={ () => startRecipeFood() }
                  data-testid="start-recipe-btn"
                >
                  { inProgressGetByStorage === null
                || inProgressGetByStorage.meals[id] === null
                    ? 'Start Recipe'
                    : 'Continue Recipe'}
                </button>
              )}
          </div>
        ))}
    </main>
  );
}

RecipeFood.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RecipeFood;
