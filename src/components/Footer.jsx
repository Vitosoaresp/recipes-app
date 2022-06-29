import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import styles from '../modules/Footer.module.css';

function Footer() {
  return (
    <footer data-testid="footer" className={ styles.footer }>
      <Link
        to="/drinks"
      >
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="Imagem de um drink" />
      </Link>
      <Link
        to="/explore"
      >
        <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="Imagem explore" />
      </Link>
      <Link
        to="/foods"
      >
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="Imagem de talheres" />
      </Link>
    </footer>
  );
}

export default Footer;
