import { Brandy, Hamburger, HeartStraight, List, User } from 'phosphor-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../modules/Footer.module.css';

function Footer() {
  const { pathname } = useLocation();

  return (
    <footer data-testid="footer" className={ styles.footer }>
      <Link
        to="/drinks"
      >
        <Brandy
          size={ 40 }
          color="#030303"
          data-testid="drinks-bottom-btn"
          weight={
            pathname === '/drinks' || pathname === '/drinks/' ? 'fill' : 'regular'
          }
        />
      </Link>
      <Link
        to="/foods"
      >
        <Hamburger
          data-testid="food-bottom-btn"
          size={ 40 }
          color="#030303"
          weight={
            pathname === '/foods' || pathname === '/foods/' ? 'fill' : 'regular'
          }
        />
      </Link>
      <Link
        to="/explore"
      >
        <List
          size={ 40 }
          color="#030303"
          weight={ pathname.includes('/explore') ? 'bold' : 'regular' }
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link
        to="/favorite-recipes"
      >
        <HeartStraight
          size={ 40 }
          color="#030303"
          weight={ pathname === '/favorite-recipes' ? 'fill' : 'regular' }
        />
      </Link>
      <Link
        to="/profile"
      >
        <User
          size={ 40 }
          color="#030303"
          weight={ pathname === '/profile' ? 'fill' : 'regular' }
        />
      </Link>
    </footer>
  );
}

export default Footer;
