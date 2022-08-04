import { Check, Compass, HeartStraight, House, User } from 'phosphor-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../modules/Footer.module.css';

function Footer() {
  const { pathname } = useLocation();

  return (
    <footer data-testid="footer" className={ styles.footer }>
      <Link
        to="/browser"
      >
        <House
          size={ 40 }
          color="#030303"
          weight={
            pathname === '/browser' || pathname === '/browser/' ? 'fill' : 'regular'
          }
        />
      </Link>
      <Link to="/favorite-recipes">
        <HeartStraight
          size={ 40 }
          color="#030303"
          weight={ pathname === '/favorite-recipes' ? 'fill' : 'regular' }
        />
      </Link>
      <Link to="/explore">
        <Compass
          size={ 40 }
          color="#030303"
          weight={ pathname.includes('/explore') ? 'fill' : 'regular' }
        />
      </Link>
      <Link to="/done-recipes">
        <Check
          size={ 40 }
          color="#030303"
          weight={ pathname === '/done-recipes' ? 'bold' : 'regular' }
        />
      </Link>
      <Link to="/profile">
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
