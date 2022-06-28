import { searchDrinks, searchFoods } from './fetchBySearch';

const FIRST_LETTER = 'first-letter';

const foodsPageSearchBar = async (search, radio, setResponse) => {
  if (radio === 'ingredient') {
    const apiResponseJson = await searchFoods(search, 'i', 'filter');
    setResponse(apiResponseJson);
  }
  if (radio === 'name') {
    const apiResponseJson = await searchFoods(search, 's', 'search');
    setResponse(apiResponseJson);
  }
  if (radio === FIRST_LETTER && search.length === 1) {
    const apiResponseJson = await searchFoods(search, 'f', 'search');
    setResponse(apiResponseJson);
  }
  if (radio === FIRST_LETTER && search.length !== 1) {
    global.alert('Your search must have only 1 (one) character');
  }
};

const drinksPageSearchBar = async (search, radio, setResponse) => {
  console.log(search);
  console.log(radio);
  console.log(setResponse);
  if (radio === 'ingredient') {
    console.log('oi');
    const apiResponseJson = await searchDrinks(search, 'i', 'filter');
    console.log(apiResponseJson);
    setResponse(apiResponseJson);
  }
  if (radio === 'name') {
    const apiResponseJson = await searchDrinks(search, 's', 'search');
    setResponse(apiResponseJson);
  }
  if (radio === FIRST_LETTER && search.length === 1) {
    const apiResponseJson = await searchDrinks(search, 'f', 'search');
    setResponse(apiResponseJson);
  }
  if (radio === FIRST_LETTER && search.length !== 1) {
    global.alert('Your search must have only 1 (one) character');
  }
};

const handleClickButton = async ({ pathname, search, radio, setResponse, setBool }) => {
  if (pathname === '/foods' || pathname === '/foods/') {
    await foodsPageSearchBar(search, radio, setResponse);
  }
  if (pathname === '/drinks' || pathname === '/drinks/') {
    await drinksPageSearchBar(search, radio, setResponse);
  }
  if (!pathname === '/drinks/') {
    setBool(true);
  }
};

export default handleClickButton;
