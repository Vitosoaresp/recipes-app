import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/Context';

function SearchBar() {
  const FIRST_LETTER = 'first-letter';
  const history = useHistory();
  const {
    search, setSearch, radio, setRadio, response, setResponse } = useContext(MyContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleRadioClick = ({ target }) => {
    const { value } = target;
    setRadio(value);
  };

  const foodsPageSearchBar = async () => {
    if (radio === 'ingredient') {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
      const apiCall = await fetch(url);
      const apiResponseJson = await apiCall.json();
      setResponse(apiResponseJson.meals);
    }
    if (radio === 'name') {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
      const apiCall = await fetch(url);
      const apiResponseJson = await apiCall.json();
      setResponse(apiResponseJson.meals);
    }
    if (radio === FIRST_LETTER && search.length === 1) {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
      const apiCall = await fetch(url);
      const apiResponseJson = await apiCall.json();
      setResponse(apiResponseJson.meals);
    }
    if (radio === FIRST_LETTER && search.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const drinksPageSearchBar = async () => {
    if (radio === 'ingredient') {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`;
      const apiCall = await fetch(url);
      const apiResponseJson = await apiCall.json();
      setResponse(apiResponseJson.drinks);
    }
    if (radio === 'name') {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
      const apiCall = await fetch(url);
      const apiResponseJson = await apiCall.json();
      setResponse(apiResponseJson.drinks);
    }
    if (radio === FIRST_LETTER && search.length === 1) {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`;
      const apiCall = await fetch(url);
      const apiResponseJson = await apiCall.json();
      setResponse(apiResponseJson.drinks);
    }
    if (radio === FIRST_LETTER && search.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  useEffect(() => {
    const { location: { pathname } } = history;
    console.log(response);
    if (response.length === 1 && pathname === '/foods') {
      console.log('if');
      const { idMeal } = response[0];
      history.push(`/foods/${idMeal}`);
    }
    if (response.length === 1 && pathname === '/drinks') {
      console.log('if');
      const { idDrink } = response[0];
      history.push(`/drinks/${idDrink}`);
    }
  }, [response, history]);

  const handleClickButton = async () => {
    const { location: { pathname } } = history;
    if (pathname === '/foods') {
      await foodsPageSearchBar();
    }
    if (pathname === '/drinks') {
      await drinksPageSearchBar();
    }
  };

  return (
    <div>
      <input
        value={ search }
        type="text"
        data-testid="search-input"
        placeholder="Pesquisar"
        onChange={ handleChange }
      />
      <label htmlFor="radio1">
        <input
          value="ingredient"
          name="search-bar"
          id="radio1"
          type="radio"
          onClick={ handleRadioClick }
          data-testid="ingredient-search-radio"
        />
        Ingredient
      </label>
      <label htmlFor="radio2">
        <input
          value="name"
          name="search-bar"
          id="radio2"
          type="radio"
          onClick={ handleRadioClick }
          data-testid="name-search-radio"
        />
        Name
      </label>
      <label htmlFor="radio3">
        <input
          value="first-letter"
          name="search-bar"
          id="radio3"
          type="radio"
          onClick={ handleRadioClick }
          data-testid="first-letter-search-radio"
        />
        First Letter
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ handleClickButton }
      >
        Search

      </button>
    </div>
  );
}

export default SearchBar;
