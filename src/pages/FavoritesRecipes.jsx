import React, { useContext, useEffect, useState } from 'react';
import CardFavoriteRecipes from '../components/CardFavoriteRecipes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/Context';
import styles from '../modules/FavoriteRecipes.module.css';

function FavoritesRecipes() {
  const { favoritos } = useContext(MyContext);
  const [favFilter, setFavFilter] = useState([]);
  const [valueFilter, setValueFilter] = useState('all');

  useEffect(() => {
    setFavFilter(favoritos);
  }, [favoritos]);

  const handleClickSelectFilter = (filter) => {
    if (filter === 'all') {
      setValueFilter('all');
      setFavFilter([...favoritos]);
    } else {
      const newFavFilter = favoritos.filter((fav) => fav.type === filter);
      setValueFilter(filter);
      setFavFilter(newFavFilter);
    }
  };

  return (
    <>
      <Header title="Favorite Recipes" />
      <main className={ styles.favContainer }>
        <div className={ styles.categories }>
          <button
            type="button"
            className={ valueFilter === 'all' ? styles.active : styles.category }
            data-testid="filter-by-all-btn"
            onClick={ () => handleClickSelectFilter('all') }
          >
            All
          </button>
          <button
            className={ valueFilter === 'food' ? styles.active : styles.category }
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ () => handleClickSelectFilter('food') }
          >
            Food
          </button>
          <button
            className={ valueFilter === 'drink' ? styles.active : styles.category }
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ () => handleClickSelectFilter('drink') }
          >
            Drink
          </button>
        </div>

        <CardFavoriteRecipes favoritos={ favFilter } />
      </main>
      <Footer />
    </>
  );
}

export default FavoritesRecipes;
