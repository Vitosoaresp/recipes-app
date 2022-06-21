export const fetchCategoriesFoods = async () => {
  const promisse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const result = await promisse.json();
  return result.meals;
};

export const fetchCategoriesDrinks = async () => {
  const promisse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const result = await promisse.json();
  return result.drinks;
};
