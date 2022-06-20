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
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div>
        <Switch>
          <Route path="/foods" component={ Foods } />
          <Route path="/drinks" component={ Drinks } />
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
            path="foods/:id/in-progress"
            render={ (props) => <InProgressFood { ...props } /> }
          />
          <Route
            path="drinks/:id/in-progress"
            render={ (props) => <InProgressDrink { ...props } /> }
          />
          <Route path="/explore" component={ Explore } />
          <Route path="/explore/foods" component={ ExploreFood } />
          <Route path="/explore/drinks" component={ ExploreDrink } />
          <Route
            path="/explore/foods/nationalities"
            component={ ExploreFoodsNationalities }
          />
          <Route path="/profile" component={ Profile } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorites-recipes" component={ FavoritesRecipes } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
