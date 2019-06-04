import React from 'react';
import Home from '../containers/Home';
import CategoriesContainer from '../containers/CategoriesContainer';
import Profile from '../containers/Profile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require('dotenv').config()

function Navbar() {
  // default render <Home/
  return (
    <Router>
      <div>
        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/about">About</Link>
          </li>
          <li>
           <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/categories" component={CategoriesContainer} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default Navbar;
