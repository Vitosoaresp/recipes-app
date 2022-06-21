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
