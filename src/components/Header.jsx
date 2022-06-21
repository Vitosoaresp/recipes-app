import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title }) {
  const [bool, setBool] = useState(true);
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    document.getElementById('foo').addEventListener('click', () => {
      setShowInput(!showInput);
    });
    if (title === 'Explore'
    || title === 'Explore Foods'
    || title === 'Explore Drinks'
    || title === 'Explore Ingredients'
    || title === 'Profile'
    || title === 'Done Recipes'
    || title === 'Favorite Recipes') {
      setBool(false);
    }
  }, [title, showInput]);

  return (
    <>
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
        && <img
          id="foo"
          src={ searchIcon }
          alt="Imagem de uma lupa"
          data-testid="search-top-btn"
        />}
      </header>
      {showInput && <SearchBar />}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
