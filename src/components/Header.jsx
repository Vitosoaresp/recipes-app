import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import MyContext from '../context/Context';
import SearchBar from './SearchBar';

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

  return (
    <header>
      <Link to="/profile">
        <img
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
      {showInput && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
