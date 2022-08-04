import { ForkKnife, Shuffle } from 'phosphor-react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../modules/Explore.module.css';

const RANDOM_DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function ExploreDrink() {
  const history = useHistory();

  const goToRandomDrink = async () => {
    const response = await fetch(RANDOM_DRINK_URL);
    const { drinks } = await response.json();
    if (drinks[0].idDrink) history.push(`/drinks/${drinks[0].idDrink}`);
  };

  return (
    <>
      <Header title="Explore Drinks" />
      <main className={ styles.exploreContainer }>
        <Link to="/explore/drinks/ingredients" className={ styles.card }>
          <ForkKnife size={ 40 } color="#007bff" weight="fill" />
          <button
            type="button"
            className={ styles.button }
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>

        <div className={ styles.card }>
          <Shuffle size={ 40 } color="#007bff" weight="fill" />
          <button
            type="button"
            className={ styles.button }
            data-testid="explore-surprise"
            onClick={ goToRandomDrink }
          >
            Surprise me!
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ExploreDrink;
