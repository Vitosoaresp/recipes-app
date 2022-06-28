import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardRecipesDrinks from '../components/CardRecipesDrinks';
import MyContext from '../context/Context';

function ExploreDrinkIngredients() {
  const { setIngredients, ingredients } = useContext(MyContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const response = await request.json();
      let data = [];
      response.drinks.forEach((obj) => {
        data = [...data, {
          idDrink: obj.strIngredient1,
          strDrink: obj.strIngredient1,
          strDrinkThumb: `https://www.thecocktaildb.com/images/ingredients/${obj.strIngredient1}-Small.png`,
        }];
      });
      setIngredients(data);
      setLoading(false);
    };
    fetchIngredients();
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" />
      { loading && <span>Carregando...</span>}
      { !loading && <CardRecipesDrinks
        recipes={ ingredients }
        dataTestid="ingredient"
      />}
      <Footer />
    </div>
  );
}

export default ExploreDrinkIngredients;
