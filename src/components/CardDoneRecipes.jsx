import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './ButtonDoneRecipes';
import '../css/imgDoneRecipes.css';
import MyContext from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import { getDoneRecipes } from '../services/localStorageDoneRecipes';

function CardDoneRecipes() {
  const [copied, setCopied] = useState(false);
  const { finishedRecipes, setFinishedRecipes } = useContext(MyContext);

  useEffect(() => {
    const onLoadPage = () => {
      setFinishedRecipes(getDoneRecipes());
    };
    onLoadPage();
  }, []);

  const copyLink = ({ type, id }) => {
    const milliSeconds = 2000;
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, milliSeconds);
    return navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
  };

  return (
    <div>
      <Button />
      { finishedRecipes && finishedRecipes.map((recipe, index) => (
        <div key={ `${recipe.id} ${index}` }>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <img
              data-testid={ `${index}-horizontal-image` }
              className="horizontal-image"
              src={ recipe.image }
              alt={ recipe.name }
            />
            <h3 data-testid={ `${index}-horizontal-name` }>
              { recipe.name }
            </h3>
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { recipe.type === 'food' && `${recipe.nationality} - ${recipe.category} ` }
            { recipe.type === 'drink'
            && `${recipe.alcoholicOrNot} - ${recipe.category} ` }
          </p>
          <p data-testid={ `${index}-horizontal-done-date` }>
            { recipe.doneDate }
          </p>
          <button
            type="button"
            onClick={ () => copyLink(recipe) }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="share"
            />
          </button>
          {copied && <span>Link copied!</span>}
          {recipe.tags.map((e) => (
            <p
              data-testid={ `${index}-${e}-horizontal-tag` }
              key={ e }
            >
              { e }
            </p>))}
        </div>
      ))}
    </div>
  );
}

export default CardDoneRecipes;
