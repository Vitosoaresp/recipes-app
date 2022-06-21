import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const [bool, setBool] = useState(true);
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
  }, [title]);

  return (
    <header>
      <img src={ profileIcon } alt="Imagem de um perfil" data-testid="profile-top-btn" />
      <h1 data-testid="page-title">{title}</h1>
      {bool
      && <img src={ searchIcon } alt="Imagem de uma lupa" data-testid="search-top-btn" />}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
