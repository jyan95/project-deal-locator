import React from 'react';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CategoriesContainer from './containers/CategoriesContainer';
import DealsContainer from './containers/DealsContainer';
import UserDeals from './containers/UserDeals';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import './App.css';

function App() {
  // default render <Home/
            // <Route path='/login' component={Login} />/
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/categories/:slug' component={DealsContainer} />
          <Route exact path='/categories/' component={CategoriesContainer} />
          <Route path='/your-deals' component={UserDeals} />
          <Route path='/signup' component={SignUp} />

        </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
