import React from 'react';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import SignUp from './components/SignUp';
// import Login from './components/Login';
import CategoriesContainer from './containers/CategoriesContainer';
import DealsContainer from './containers/DealsContainer';
import Profile from './containers/Profile';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/categories/:slug' component={DealsContainer} />
        <Route exact path='/categories/' component={CategoriesContainer} />
        <Route path='/your-deals' component={Profile} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
