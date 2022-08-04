import { Brandy, Hamburger } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../modules/Explore.module.css';

function Explore() {
  return (
    <main className={ styles.exploreContainer }>

      <Link to="/browser/explore/foods" className={ styles.card }>
        <Hamburger size={ 40 } color="#007bff" weight="fill" />
        <button
          type="button"
          data-testid="explore-foods"
          className={ styles.button }
        >
          Explore Foods
        </button>
      </Link>

      <Link to="/browser/explore/drinks" className={ styles.card }>
        <Brandy size={ 40 } color="#007bff" weight="fill" />
        <button
          type="button"
          data-testid="explore-drinks"
          className={ styles.button }
        >
          Explore Drinks
        </button>
      </Link>
    </main>
  );
}

export default Explore;
