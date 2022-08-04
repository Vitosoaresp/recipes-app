import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import ExploreFood from './pages/ExploreFood';
import ExploreDrink from './pages/ExploreDrink';
import ExploreFoodsNationalities from './pages/ExploreFoodsNationalities';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoritesRecipes from './pages/FavoritesRecipes';
import InProgressFood from './pages/InProgressFood';
import InProgressDrink from './pages/InProgressDrink';
import RecipeFood from './pages/RecipeFood';
import RecipeDrink from './pages/RecipeDrink';
import ExploreFoodIngredients from './pages/ExploreFoodIngredients';
import ExploreDrinkIngredients from './pages/ExploreDrinkIngredients';
import NotFound from './pages/NotFound';
import Provider from './context/Provider';
import Browser from './pages/Browser';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/browser" component={ Browser } />
        <Route
          exact
          path="/foods/:id"
          render={ (props) => <RecipeFood { ...props } /> }
        />
        <Route
          exact
          path="/drinks/:id"
          render={ (props) => <RecipeDrink { ...props } /> }
        />
        <Route
          exact
          path="/foods/:id/in-progress"
          render={ (props) => <InProgressFood { ...props } /> }
        />
        <Route
          exact
          path="/drinks/:id/in-progress"
          render={ (props) => <InProgressDrink { ...props } /> }
        />
        <Route exact path="/explore/foods" component={ ExploreFood } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodIngredients }
        />
        <Route exact path="/explore/drinks" component={ ExploreDrink } />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinkIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreFoodsNationalities }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route
          exact
          path="/explore/drinks/nationalities"
          component={ NotFound }
        />
        <Route exact path="/favorite-recipes" component={ FavoritesRecipes } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
