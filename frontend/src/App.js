import React from 'react';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import CategoriesContainer from './containers/CategoriesContainer';
import DealsContainer from './containers/DealsContainer';
import Profile from './containers/Profile';
import { Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  // default render <Home/
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories/:slug" component={DealsContainer} />
        <Route exact path="/categories/" component={CategoriesContainer} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
