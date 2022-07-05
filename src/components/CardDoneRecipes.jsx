import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonDoneRecipes from './ButtonDoneRecipes';
import '../css/imgDoneRecipes.css';
import MyContext from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import styles from '../modules/DoneRecipes.module.css';

function CardDoneRecipes() {
  const [copied, setCopied] = useState(false);
  const { finishedRecipes } = useContext(MyContext);
  const [recipesByFilter, setRecipesByFilter] = useState([]);
  const [filter, setFilter] = useState('All');

  const filterByCategory = (category) => {
    if (category === 'All') {
      setRecipesByFilter([...finishedRecipes]);
      setFilter('All');
    }
    if (category === 'Food') {
      const recipesByCategory = finishedRecipes.filter(
        (recipe) => recipe.type === 'food',
      );
      setRecipesByFilter([...recipesByCategory]);
      setFilter('Food');
    }
    if (category === 'Drink') {
      const recipesByCategory = finishedRecipes.filter(
        (recipe) => recipe.type === 'drink',
      );
      setRecipesByFilter([...recipesByCategory]);
      setFilter('Drink');
    }
  };

  useEffect(() => {
    setRecipesByFilter(finishedRecipes);
  }, []);

  const copyLink = ({ type, id }, index) => {
    const milliSeconds = 2000;
    navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
    setCopied(index);
    return setTimeout(() => {
      setCopied(false);
    }, milliSeconds);
  };

  return (
    <div className={ styles.doneRecipesContainer }>
      <ButtonDoneRecipes filter={ filter } selectFilter={ filterByCategory } />
      <div className={ styles.cardsRecipe }>
        { recipesByFilter && recipesByFilter.map((recipe, index) => (
          <div className={ styles.cardRecipe } key={ `${recipe.id} ${index}` }>
            {copied === index && (
              <div className={ styles.modal }>
                <span>Link copied!</span>
              </div>
            )}
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ recipe.name }
              />
            </Link>
            <div className={ styles.cardText }>
              <div className={ styles.nameAndCopied }>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <p data-testid={ `${index}-horizontal-name` }>
                    { recipe.name }
                  </p>
                </Link>
                <button
                  className={ styles.copied }
                  type="button"
                  onClick={ () => copyLink(recipe, index) }
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    src={ shareIcon }
                    alt="share"
                  />
                </button>
              </div>
              <div className={ styles.categoryAndNationality }>
                <p data-testid={ `${index}-horizontal-top-text` }>
                  { recipe.type === 'food'
                && `${recipe.nationality} - ${recipe.category} ` }
                  { recipe.type === 'drink'
                && `${recipe.alcoholicOrNot} - ${recipe.category} ` }
                </p>
              </div>
              <div className={ styles.doneDate }>
                <p data-testid={ `${index}-horizontal-done-date` }>
                  Done in:
                  {' '}
                  { recipe.doneDate }
                </p>
              </div>
              {/* <div className={ styles.tags }>
                {recipe.tags.map((e) => (
                  <p
                    data-testid={ `${index}-${e}-horizontal-tag` }
                    key={ e }
                  >
                    { e }
                  </p>))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardDoneRecipes;
