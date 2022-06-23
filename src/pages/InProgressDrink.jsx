import React from 'react';
import { drink } from '../services/mockReturnApi';
import { handleChangeDrinks } from '../services/inProgressPage';

function InProgressDrink() {
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

  return (
    <div>
      <section>
        <img src={ strDrinkThumb } alt="Imagem da receita" data-testid="recipe-photo" />
        <h2 data-testid="recipe-title">{strDrink}</h2>
        <p data-testid="recipe-category">{strCategory}</p>
      </section>
      <section>
        <button type="button" data-testid="share-btn">Share</button>
        <button type="button" data-testid="favorite-btn">Favorite</button>
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
        <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
      </section>
    </div>
  );
}

export default InProgressDrink;
