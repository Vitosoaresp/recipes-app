import React from 'react';
import { Brandy, Hamburger } from 'phosphor-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../modules/Explore.module.css';

function Explore() {
  return (
    <>
      <Header title="Explore" />
      <main className={ styles.exploreContainer }>
        <Link
          to="/explore/foods"
          className={ styles.card }
        >
          <Hamburger size={ 40 } color="#007bff" weight="fill" />
          <p className={ styles.cardText }>
            Explore Foods
          </p>
        </Link>

        <Link
          to="/explore/drinks"
          className={ styles.card }
        >
          <Brandy size={ 40 } color="#007bff" weight="fill" />
          <p className={ styles.cardText }>
            Explore Drinks
          </p>
        </Link>

      </main>
      <Footer />
    </>
  );
}

export default Explore;
