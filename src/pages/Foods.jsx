import Footer from '../components/Footer';
import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/Context';

function Foods() {
  const { response } = useContext(MyContext);
  return (
    <div>
      <Header title="Foods" />
      <section>
        {response !== null && response.map((recipe, i) => {
          const { strMealThumb, strMeal } = recipe;
          return (
            <div
              key={ i }
              data-testid={ `${i}-recipe-card` }
            >
              <img
                src={ strMealThumb }
                alt="recipe"
                data-testid={ `${i}-card-img` }
              />
              <p data-testid={ `${i}-card-name` }>{strMeal}</p>
            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
}

export default Foods;
