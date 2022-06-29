import React from 'react';
import { BiDrink } from 'react-icons/bi';
import { MdFastfood } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../modules/Explore.module.css';

function Explore() {
  return (

    <>
      <Header title="Explore" />
      <main className={ styles.exploreContainer }>

        <Link to="/explore/foods" className={ styles.card }>
          <MdFastfood />
          <button
            type="button"
            data-testid="explore-foods"
            className={ styles.button }
          >
            Explore Foods
          </button>

        </Link>

        <Link to="/explore/drinks" className={ styles.card }>
          <BiDrink />
          <button
            type="button"
            data-testid="explore-drinks"
            className={ styles.button }
          >
            Explore Drinks
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default Explore;
