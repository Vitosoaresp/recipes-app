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
      <div className={ styles.exploreContainer }>
        <Link to="/explore/foods/ingredients" className={ styles.card }>
          <ForkKnife size={ 40 } color="#007bff" weight="fill" />
          <p className={ styles.cardText }>
            By Ingredient
          </p>
        </Link>

        <Link to="/explore/foods/nationalities" className={ styles.card }>
          <Flag size={ 40 } color="#007bff" weight="fill" />
          <p className={ styles.button }>
            By Nationality
          </p>
        </Link>

        <div className={ styles.card }>
          <button
            className={ styles.button }
            type="button"
            data-testid="explore-surprise"
            onClick={ goToRandomMeal }
          >
            <Shuffle size={ 40 } color="#007bff" weight="fill" />
            Surprise me!
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExploreFood;
