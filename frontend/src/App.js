import React from 'react';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CategoriesContainer from './containers/CategoriesContainer';
import DealsContainer from './containers/DealsContainer';
import Profile from './containers/Profile';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/categories/:slug' component={DealsContainer} />
          <Route exact path='/categories/' component={CategoriesContainer} />
          <Route path='/profile' component={Profile} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
