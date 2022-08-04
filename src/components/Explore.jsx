import { Brandy, Hamburger } from 'phosphor-react';
import React, { useState } from 'react';
import styles from '../modules/Explore.module.css';
import ExploreDrink from '../pages/ExploreDrink';
import ExploreFood from '../pages/ExploreFood';

function Explore() {
  const [isExploring, setIsExploring] = useState('');

  return (
    <main className={ styles.exploreContainer }>

      { isExploring === 'foods' && <ExploreFood /> }
      { isExploring === 'drinks' && <ExploreDrink /> }
      { isExploring === '' && (
        <>
          <button
            type="button"
            onClick={ () => setIsExploring('foods') }
            className={ styles.card }
          >
            <Hamburger size={ 40 } color="#007bff" weight="fill" />
            <button
              type="button"
              data-testid="explore-foods"
              className={ styles.button }
            >
              Explore Foods
            </button>
          </button>

          <button
            type="button"
            onClick={ () => setIsExploring('drinks') }
            className={ styles.card }
          >
            <Brandy size={ 40 } color="#007bff" weight="fill" />
            <button
              type="button"
              data-testid="explore-drinks"
              className={ styles.button }
            >
              Explore Drinks
            </button>
          </button>
        </>
      )}

    </main>
  );
}

export default Explore;
