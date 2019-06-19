import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CategoriesContainer from './containers/CategoriesContainer';
import DealsContainer from './containers/DealsContainer';
import FollowedDeals from './containers/FollowedDeals';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/categories/:slug' component={DealsContainer} />
        <Route exact path='/categories/' component={CategoriesContainer} />
        <Route path='/your-deals' component={FollowedDeals} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
