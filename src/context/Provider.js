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
  const [showInput, setShowInput] = useState(false);
  const [response, setResponse] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [finishedRecipes, setFinishedRecipes] = useState([]);
  const [src, setSrc] = useState('whiteHeartIcon');
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

  useEffect(() => {
    const fetchAPI = async () => {
      const foods = await fetchFoods();
      const drinks = await fetchDrinks();
      if (!localStorage.getItem('doneRecipes')) {
        localStorage.setItem('doneRecipes', JSON.stringify([]));
      }
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

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoritos));
  }, [favoritos, setFavoritos]);

  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [inProgressRecipes, setInProgressRecipes]);

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
    showInput,
    setShowInput,
    recipeDetails,
    setRecipeDetails,
    finishedRecipes,
    setFinishedRecipes,
    src,
    setSrc,
    favoritos,
    setFavoritos,
    inProgressRecipes,
    setInProgressRecipes,
  };

  return <MyContext.Provider value={ context }>{children}</MyContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
