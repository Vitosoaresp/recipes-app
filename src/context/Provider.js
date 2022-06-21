import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import { fetchDrinks, fetchFoods } from '../services/fetchFoodsAndDrinks';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [drinksAPI, setDrinksAPI] = useState([]);
  const [foodsAPI, setFoodsAPI] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const foods = await fetchFoods();
      const drinks = await fetchDrinks();
      setDrinksAPI(drinks);
      setFoodsAPI(foods);
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
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
