import React, { useState, useContext } from 'react';
import { meal } from '../services/mockReturnApi';
import { handleChangeFoods } from '../services/inProgressPage';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import MyContext from '../context/Context';

function InProgressFood() {
  const [copied, setCopied] = useState(false);
  // const [checkBox, setCheckBox] = useState();
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

  // useEffect(() => {
  // }, [handleClick]);

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
  } = meal;
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
          id="button"
          src={ src }
          type="button"
          data-testid="favorite-btn"
          onClick={ handleClick }
        >
          <img id="favorites" src={ whiteHeartIcon } alt="button" />

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
        <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
      </section>
    </div>
  );
}

export default InProgressFood;
