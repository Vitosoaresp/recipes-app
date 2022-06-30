import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import MyContext from '../context/Context';
import styles from '../modules/FavoriteRecipes.module.css';

function CardFavoriteRecipes({ favoritos }) {
  const { setFavoritos } = useContext(MyContext);
  const [isCopied, setIsCopied] = useState(false);

  const handleClickDesfavorite = (recipe) => {
    const newFavorites = favoritos.filter((fav) => fav.id !== recipe.id);
    setFavoritos(newFavorites);
  };

  const copyLink = ({ type, id }) => {
    const milliSeconds = 2000;
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, milliSeconds);
    return navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
  };

  return (
    <div className={ styles.recipesList }>
      { favoritos && favoritos.map((recipe, index) => (
        <div key={ `${recipe.id} ${index}` } className={ styles.card }>
          <Link to={ `/${recipe.type}s/${recipe.id}` }>
            <img
              data-testid={ `${index}-horizontal-image` }
              className="horizontal-image"
              src={ recipe.image }
              alt={ recipe.name }
            />
          </Link>
          <div className={ styles.info }>
            <h3 data-testid={ `${index}-horizontal-name` }>
              { recipe.name }
            </h3>
            <p data-testid={ `${index}-horizontal-top-text` }>
              { recipe.type === 'food' && `${recipe.nationality} - ${recipe.category} ` }
              { recipe.type === 'drink' && `${recipe.alcoholicOrNot}` }
            </p>
            <div className={ styles.actions }>
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
              {isCopied && <span>Link copied!</span>}
              <button
                type="button"
                onClick={ () => handleClickDesfavorite(recipe) }
              >
                <img
                  src={ blackHeartIcon }
                  alt="Icone de coração preenchido"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                />
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

CardFavoriteRecipes.propTypes = {
  favoritos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default CardFavoriteRecipes;
