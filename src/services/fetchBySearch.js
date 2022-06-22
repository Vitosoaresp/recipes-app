export const searchFoods = async (foods, radio) => {
  console.log(foods);
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${radio}=${foods}`);
  const result = await request.json();
  return result.meals;
};

export const searchDrinks = async (drink, radio) => {
  console.log(drink);
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${radio}=${drink}`);
  const result = await request.json();
  return result.drinks;
};
