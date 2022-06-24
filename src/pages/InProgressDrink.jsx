import React, { useContext, useState } from 'react';
import { drink } from '../services/mockReturnApi';
import { handleChangeDrinks } from '../services/inProgressPage';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import MyContext from '../context/Context';

function InProgressDrink() {
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
        <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
      </section>
    </div>
  );
}

export default InProgressDrink;
