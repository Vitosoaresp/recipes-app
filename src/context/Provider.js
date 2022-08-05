import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import baseData from '../services/fetchCategoriesFoodsAndDrinks';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [response, setResponse] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [finishedRecipes, setFinishedRecipes] = useState(
    JSON.parse(localStorage.getItem('doneRecipes')) || [],
  );
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem('favoriteRecipes')) || [],
  );
  const [inProgressRecipes, setInProgressRecipes] = useState(
    JSON.parse(localStorage.getItem('inProgressRecipes')) || {
      cocktails: {
      },
      meals: {
      },
    },
  );
  const [data, setData] = useState({ Foods: [], Drins: [] });

  useEffect(() => {
    const fetchAPI = async () => {
      const getFoods = await baseData.foods();
      const getDrinks = await baseData.drinks();
      setData({ Foods: getFoods, Drinks: getDrinks });
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoritos));
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    localStorage.setItem('doneRecipes', JSON.stringify(finishedRecipes));
  }, [favoritos, inProgressRecipes, finishedRecipes]);

  const context = {
    email,
    setEmail,
    response,
    setResponse,
    showInput,
    setShowInput,
    recipeDetails,
    setRecipeDetails,
    finishedRecipes,
    setFinishedRecipes,
    favoritos,
    setFavoritos,
    inProgressRecipes,
    setInProgressRecipes,
    data,
  };

  return <MyContext.Provider value={ context }>{children}</MyContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
