import { Flag, ForkKnife, Shuffle } from 'phosphor-react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../modules/Explore.module.css';

const RANDOM_FOOD_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

function ExploreFood() {
  const history = useHistory();

  const goToRandomMeal = async () => {
    const response = await fetch(RANDOM_FOOD_URL);
    const { meals } = await response.json();
    if (meals[0].idMeal) history.push(`/foods/${meals[0].idMeal}`);
  };

  return (
    <>
      <Header title="Explore Foods" />
      <main className={ styles.exploreContainer }>
        <Link to="/explore/foods/ingredients" className={ styles.card }>
          <ForkKnife size={ 40 } color="#007bff" weight="fill" />
          <button
            type="button"
            className={ styles.button }
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>

        <Link to="/explore/foods/nationalities" className={ styles.card }>
          <Flag size={ 40 } color="#007bff" weight="fill" />
          <button
            type="button"
            className={ styles.button }
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        </Link>

        <div className={ styles.card }>
          <Shuffle size={ 40 } color="#007bff" weight="fill" />
          <button
            className={ styles.button }
            type="button"
            data-testid="explore-surprise"
            onClick={ goToRandomMeal }
          >
            Surprise me!
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ExploreFood;
