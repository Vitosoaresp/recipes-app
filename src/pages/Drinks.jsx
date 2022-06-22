import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/Context';

function Drinks() {
  const { response } = useContext(MyContext);
  return (
    <div>
      <Header title="Drinks" />
      <section>
        {response !== null && response.map((recipe, i) => {
          const { strDrinkThumb, strDrink } = recipe;
          const MAX_INDEX = 11;
          if (i > MAX_INDEX) {
            return null;
          }
          return (
            <div
              key={ i }
              data-testid={ `${i}-recipe-card` }
            >
              <img
                src={ strDrinkThumb }
                alt="recipe"
                data-testid={ `${i}-card-img` }
              />
              <p data-testid={ `${i}-card-name` }>{strDrink}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Drinks;
