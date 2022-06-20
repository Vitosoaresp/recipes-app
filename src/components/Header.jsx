import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header>
      <img src={ profileIcon } alt="Imagem de um perfil" data-testid="profile-top-btn" />
      <h1 data-testid="page-title">Foods</h1>
      <img src={ searchIcon } alt="Imagem de uma lupa" data-testid="search-top-btn" />
    </header>
  );
}

export default Header;
