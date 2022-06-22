import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import { fetchDrinks, fetchFoods } from '../services/fetchFoodsAndDrinks';
import {
  fetchCategoriesDrinks,
  fetchCategoriesFoods,
  foodsByFilter,
  drinksByFilter,
} from '../services/fetchCategoriesFoodsAndDrinks';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [drinksAPI, setDrinksAPI] = useState([]);
  const [foodsAPI, setFoodsAPI] = useState([]);
  const [categoriesFoods, setCategoriesFoods] = useState([]);
  const [categoriesDrinks, setCategoriesDrinks] = useState([]);
  const [categorySelect, setCategorySelect] = useState({
    type: '',
    category: '',
  });
  const [recipesByFilter, setRecipesByFilter] = useState([]);
  const [search, setSearch] = useState('');
  const [radio, setRadio] = useState('');
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const foods = await fetchFoods();
      const drinks = await fetchDrinks();
      setDrinksAPI(drinks);
      setFoodsAPI(foods);
      const categoriesFood = await fetchCategoriesFoods();
      const categoriesDrink = await fetchCategoriesDrinks();
      setCategoriesFoods(categoriesFood);
      setCategoriesDrinks(categoriesDrink);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    if (categorySelect.category !== '') {
      const filterByCategories = async () => {
        if (categorySelect.type === 'drinks') {
          const result = await drinksByFilter(categorySelect.category);
          return setRecipesByFilter([...result]);
        }
        const result = await foodsByFilter(categorySelect.category);
        return setRecipesByFilter([...result]);
      };
      filterByCategories();
    }
  }, [categorySelect]);

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    drinksAPI,
    foodsAPI,
    categoriesFoods,
    categoriesDrinks,
    categorySelect,
    setCategorySelect,
    recipesByFilter,
    search,
    setSearch,
    radio,
    setRadio,
    response,
    setResponse,
  };

  return <MyContext.Provider value={ context }>{children}</MyContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
