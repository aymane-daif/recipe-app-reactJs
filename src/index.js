import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import SpecificRecipe from './components/SpecificRecipe'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/:id">
            <SpecificRecipe />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
