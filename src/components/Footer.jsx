import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  const history = useHistory();
  return (
    <footer data-testid="footer">
      <button
        type="button"
        onClick={ () => history.push('/drinks') }
      >
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="Imagem de um drink" />
      </button>
      <button
        type="button"
        onClick={ () => history.push('/explore') }
      >
        <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="Imagem explore" />
      </button>
      <button
        type="button"
        onClick={ () => history.push('/foods') }
      >
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="Imagem de talheres" />
      </button>
    </footer>
  );
}

export default Footer;
