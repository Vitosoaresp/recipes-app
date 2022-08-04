import React from 'react';
import Header from '../components/Header';
import CardDoneRecipes from '../components/CardDoneRecipes';
import Footer from '../components/Footer';

function DoneRecipes() {
  return (
    <>
      <Header title="Done Recipes" />
      <CardDoneRecipes />
      <Footer />
    </>
  );
}

export default DoneRecipes;
