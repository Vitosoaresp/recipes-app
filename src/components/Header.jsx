import React from 'react';
import { CookingPot } from 'phosphor-react';
import PropTypes from 'prop-types';
import styles from '../modules/Header.module.css';

function Header({ title }) {
  return (
    <header className={ styles.container }>
      <div className={ styles.header }>
        <h1 data-testid="page-title">{title}</h1>
        {title === 'Meals' || title === 'Drinks' ? (
          <CookingPot color="black" size={ 40 } weight="fill" />
        ) : null}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
