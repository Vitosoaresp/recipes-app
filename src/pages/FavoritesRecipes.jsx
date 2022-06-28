import React from 'react';
import CardFavoriteRecipes from '../components/CardFavoriteRecipes';
import Header from '../components/Header';

function FavoritesRecipes() {
  return (
    <>
      <Header title="Favorite Recipes" />
      <main>
        <CardFavoriteRecipes />
      </main>
    </>
  );
}

export default FavoritesRecipes;
