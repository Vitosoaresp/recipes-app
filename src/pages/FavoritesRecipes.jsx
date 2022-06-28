import React, { useContext, useEffect, useState } from 'react';
import CardFavoriteRecipes from '../components/CardFavoriteRecipes';
import Header from '../components/Header';
import MyContext from '../context/Context';

function FavoritesRecipes() {
  const { favoritos } = useContext(MyContext);
  const [favFilter, setFavFilter] = useState([]);

  useEffect(() => {
    setFavFilter(favoritos);
  }, [favoritos]);

  const handleClickSelectFilter = (filter) => {
    if (filter === 'all') {
      setFavFilter([...favoritos]);
    } else {
      const newFavFilter = favoritos.filter((fav) => fav.type === filter);
      setFavFilter(newFavFilter);
    }
  };

  return (
    <>
      <Header title="Favorite Recipes" />
      <main>
        <div>
          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ () => handleClickSelectFilter('all') }
          >
            All
          </button>
          <button
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ () => handleClickSelectFilter('food') }
          >
            Food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ () => handleClickSelectFilter('drink') }
          >
            Drink
          </button>
        </div>

        <CardFavoriteRecipes favoritos={ favFilter } />
      </main>
    </>
  );
}

export default FavoritesRecipes;
