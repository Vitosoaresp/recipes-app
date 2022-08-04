import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import MyContext from '../context/Context';
import SearchBar from './SearchBar';
import styles from '../modules/Header.module.css';

function Header({ title }) {
  const { showInput, setShowInput } = useContext(MyContext);

  return (
    <header className={ styles.container }>
      <div className={ styles.header }>
        <h1 data-testid="page-title">{title}</h1>
        {title === 'Meal' || title === 'Drink' ? (
          <button type="button" onClick={ () => setShowInput(!showInput) }>
            <img
              src={ searchIcon }
              alt="Imagem de uma lupa"
              data-testid="search-top-btn"
            />
          </button>) : null}
      </div>
      {showInput && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
