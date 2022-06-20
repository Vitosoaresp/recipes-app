import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
