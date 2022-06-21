import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Pesquisar"
      />
      <label htmlFor="radio1">
        <input
          name="search-bar"
          id="radio1"
          type="radio"
          data-testid="ingredient-search-radio"
        />
        Ingredient
      </label>
      <label htmlFor="radio2">
        <input
          name="search-bar"
          id="radio2"
          type="radio"
          data-testid="name-search-radio"
        />
        Name
      </label>
      <label htmlFor="radio3">
        <input
          name="search-bar"
          id="radio3"
          type="radio"
          data-testid="first-letter-search-radio"
        />
        First Letter
      </label>
      <button data-testid="exec-search-btn" type="button">Search</button>
    </div>
  );
}

export default SearchBar;
