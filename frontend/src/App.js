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
let lat = 40.7068;
let lon = -74.0149;

const getLocation = () => {
  if ('geolocation' in navigator) {
    // console.log('fetching location');
    navigator.geolocation.getCurrentPosition((position) => {
      // debugger
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      // console.log('setting pos')
    });
  } else {
    console.log('geolocation is not available');
  }
}

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
      {getLocation()}
    </React.Fragment>
  );
}

export default App;
export {lat,lon};
