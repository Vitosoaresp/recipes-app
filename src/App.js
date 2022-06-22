import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
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
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div>
        <Switch>
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
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
          <Route exact path="/explore" component={ Explore } />
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
          <Route exact path="/favorite-recipes" component={ FavoritesRecipes } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
