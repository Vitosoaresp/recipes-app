export const fetchFoods = async () => {
  const promisse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const result = await promisse.json();
  return result.meals;
};

export const fetchDrinks = async () => {
  const requisition = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const result = await requisition.json();
  return result.drinks;
};

export const getFoodDetails = async (id) => {
  const fetchFood = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const result = await fetchFood.json();
  return result.meals;
};

export const getDrinkDetails = async (id) => {
  const fetchDrink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const result = await fetchDrink.json();
  return result.drinks;
};
