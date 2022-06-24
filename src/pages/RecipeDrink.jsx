import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';
import { getDrinkDetails } from '../services/fetchFoodsAndDrinks';
import RecomendedCarrousel from '../components/RecomendedCarrousel/RecomendedCarrousel';

function RecipeDrink({ match }) {
  const { params: { id } } = match;
  const { recipeDetails, setRecipeDetails, foodsAPI } = useContext(MyContext);
  const [details, setDetails] = useState({
    ingredients: [], measures: [],
  });

  const DONE_RECIPES = [{
    id: '15997',
    type: 'comida-ou-bebida',
    nationality: 'nacionalidade-da-receita-ou-texto-vazio',
    category: 'categoria-da-receita-ou-texto-vazio',
    alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
    name: 'nome-da-receita',
    image: 'imagem-da-receita',
    doneDate: 'quando-a-receita-foi-concluida',
    tags: 'array-de-tags-da-receita-ou-array-vazio',
  }];

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
            <button type="button" data-testid="share-btn">Compartilhar</button>
            <button type="button" data-testid="favorite-btn">Favoritar</button>
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
            { DONE_RECIPES.map((recipe) => recipe.id !== id && (
              <button
                type="button"
                style={ { position: 'fixed', bottom: 0 } }
                data-testid="start-recipe-btn"
              >
                Start Recipe
              </button>
            ))}
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
