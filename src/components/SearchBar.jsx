import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/Context';
import handleClickButton from '../services/helpsSearch';
import styles from '../modules/Header.module.css';

function SearchBar() {
  const history = useHistory();
  const {
    search,
    setSearch,
    radio, setRadio, response, setResponse, bool, setBool } = useContext(MyContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleRadioClick = ({ target }) => {
    const { value } = target;
    setRadio(value);
  };

  useEffect(() => {
    const { location: { pathname } } = history;
    console.log(response);
    if (response === null || (response.length === 0 && bool)) {
      setBool(false);
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      return;
    }
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
  }, [response, history, bool]);

  const { location: { pathname } } = history;

  const obj = {
    pathname,
    search,
    radio,
    setResponse,
    setBool,
  };

  return (
    <div className={ styles.searchContainer }>
      <div className={ styles.search }>
        <input
          value={ search }
          type="text"
          data-testid="search-input"
          placeholder="Pesquisar"
          onChange={ handleChange }
        />
      </div>

      <div className={ styles.radios }>
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
      </div>

      <button
        data-testid="exec-search-btn"
        className={ styles.buttonSearch }
        type="button"
        onClick={ () => handleClickButton(obj) }
      >
        Search

      </button>
    </div>
  );
}
export default SearchBar;
