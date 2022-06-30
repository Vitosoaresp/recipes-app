import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import MyContext from '../context/Context';
import SearchBar from './SearchBar';
import styles from '../modules/Header.module.css';

function Header({ title }) {
  const [bool, setBool] = useState(true);
  const { showInput, setShowInput } = useContext(MyContext);
  useEffect(() => {
    if (title === 'Explore'
    || title === 'Explore Foods'
    || title === 'Explore Drinks'
    || title === 'Explore Ingredients'
    || title === 'Profile'
    || title === 'Done Recipes'
    || title === 'Favorite Recipes') {
      setBool(false);
    }
  }, [title, setShowInput, showInput]);

  const history = useHistory();

  const { pathname } = history.location;

  return (
    <header>
      <div
        className={ pathname === '/done-recipes' ? (
          styles.headerDoneRecipes) : styles.header }
      >
        <Link to="/profile">
          <img
            id="foo"
            src={ profileIcon }
            alt="Imagem de um perfil"
            data-testid="profile-top-btn"
          />
        </Link>
        <h1 data-testid="page-title">{title}</h1>
        {bool
        && (
          <button type="button" onClick={ () => setShowInput(!showInput) }>
            <img
              src={ searchIcon }
              alt="Imagem de uma lupa"
              data-testid="search-top-btn"
            />
          </button>)}
      </div>
      {showInput && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
