import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MyContext from '../context/Context';
import handleClickButton from '../services/helpsSearch';

function CardRecipesDrinks({ recipes, dataTestid }) {
  const TWELVE = 12;

  const { setResponse } = useContext(MyContext);

  const searchIngredient = (search) => {
    const obj = {
      pathname: '/drinks',
      search,
      radio: 'ingredient',
      setResponse,
    };
    handleClickButton(obj);
  };

  return (
    <>
      {recipes.slice(0, TWELVE)
        .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
          <Link
            to={ `/drinks/${idDrink !== Number ? '' : strDrink}` }
            key={ idDrink }
            onClick={ () => searchIngredient(strDrink) }
          >
            <div data-testid={ `${index}-${dataTestid}-card` }>
              <img
                src={ strDrinkThumb }
                alt={ `Receita de ${strDrink}` }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{strDrink}</p>
            </div>
          </Link>
        ))}
    </>
  );
}

CardRecipesDrinks.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default CardRecipesDrinks;
