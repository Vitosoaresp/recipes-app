import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import { fetchDrinks, fetchFoods } from '../services/fetchFoodsAndDrinks';
import {
  fetchCategoriesDrinks,
  fetchCategoriesFoods,
} from '../services/fetchCategoriesFoodsAndDrinks';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [drinksAPI, setDrinksAPI] = useState([]);
  const [foodsAPI, setFoodsAPI] = useState([]);
  const [categoriesFoods, setCategoriesFoods] = useState([]);
  const [categoriesDrinks, setCategoriesDrinks] = useState([]);

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

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    drinksAPI,
    foodsAPI,
    categoriesFoods,
    categoriesDrinks,
  };

  return <MyContext.Provider value={ context }>{children}</MyContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
