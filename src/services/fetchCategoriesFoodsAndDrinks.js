const BASE_API_FOOD_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const BASE_API_DRINKS_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

const baseFetch = async (baseApi, category) => {
  const request = await fetch(`${baseApi}${category}`);
  const result = await request.json();
  return result;
};

const baseData = {
  foods: async () => [
    {
      slug: 'Beef',
      meals: await baseFetch(BASE_API_FOOD_CATEGORY, 'Beef'),
    },
    {
      slug: 'Starter',
      meals: await baseFetch(BASE_API_FOOD_CATEGORY, 'Starter'),
    },
    {
      slug: 'Breakfast',
      meals: await baseFetch(BASE_API_FOOD_CATEGORY, 'Breakfast'),
    },
    {
      slug: 'Chicken',
      meals: await baseFetch(BASE_API_FOOD_CATEGORY, 'Chicken'),
    },
    {
      slug: 'Dessert',
      meals: await baseFetch(BASE_API_FOOD_CATEGORY, 'Dessert'),
    },
    {
      slug: 'Goat',
      meals: await baseFetch(BASE_API_FOOD_CATEGORY, 'Goat'),
    },
    {
      slug: 'Lamb',
      meals: await baseFetch(BASE_API_FOOD_CATEGORY, 'Lamb'),
    },
    {
      slug: 'Miscellaneous',
      meals: await baseFetch(BASE_API_FOOD_CATEGORY, 'Miscellaneous'),
    },
    {
      slug: 'Pork',
      meals: await baseFetch(BASE_API_FOOD_CATEGORY, 'Pork'),
    },
  ],
  drinks: async () => [
    {
      slug: 'Ordinary Drink',
      drinks: await baseFetch(BASE_API_DRINKS_CATEGORY, 'Ordinary Drink'),
    },
    {
      slug: 'Cocktail',
      drinks: await baseFetch(BASE_API_DRINKS_CATEGORY, 'Cocktail'),
    },
    {
      slug: 'Shake',
      drinks: await baseFetch(BASE_API_DRINKS_CATEGORY, 'Shake'),
    },
    {
      slug: 'Cocoa',
      drinks: await baseFetch(BASE_API_DRINKS_CATEGORY, 'Cocoa'),
    },
    {
      slug: 'Shot',
      drinks: await baseFetch(BASE_API_DRINKS_CATEGORY, 'Shot'),
    },
    {
      slug: 'Homemade Liqueur',
      drinks: await baseFetch(BASE_API_DRINKS_CATEGORY, 'Homemade Liqueur'),
    },
    {
      slug: 'Punch / Party Drink',
      drinks:
        await baseFetch(BASE_API_DRINKS_CATEGORY, 'Punch%20/%20Party%20Drink'),
    },
    {
      slug: 'Beer',
      drinks: await baseFetch(BASE_API_DRINKS_CATEGORY, 'Beer'),
    },
  ],
};

export default baseData;
