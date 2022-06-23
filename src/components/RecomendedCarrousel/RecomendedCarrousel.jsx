import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './RecomendedCarousel.css';

export default function RecomendedCarrousel({ recipes, type }) {
  const carousel = useRef(null);
  const handleRigthCLick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleLeftCLick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  return (
    <section className="container">
      <div className="carrousel" ref={ carousel }>
        {recipes.map((recipe, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recomendation-card` }
            className="card"
          >
            <div className="image">
              <img
                src={ type === 'foods' ? recipe.strMealThumb : recipe.strDrinkThumb }
                alt={ type === 'foods' ? recipe.strMeal : recipe.strDrink }
              />
            </div>
            <div className="info">
              <h3 className="nome" data-testid={ `${index}-recomendation-title` }>
                {type === 'foods' ? recipe.strMeal : recipe.strDrink}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="btn-arrow leftArrow" onClick={ handleLeftCLick }>
        <span className="arrow">
          {'<'}
        </span>
      </button>
      <button type="button" className="btn-arrow rigthArrow" onClick={ handleRigthCLick }>
        <span className="arrow">
          {'>'}
        </span>
      </button>
    </section>
  );
}

RecomendedCarrousel.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};
