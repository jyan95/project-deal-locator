import React from 'react';
import { Link } from "react-router-dom";

require('dotenv').config()

function Navbar() {
  // default render <Home/
  return (
      <div>
        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/categories">Categories</Link>
          </li>
          <li>
           <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <hr />
      </div>
  );
}

export default Navbar;
