import React from 'react';
import Home from './containers/Home';
import Navbar from './components/Navbar';

import './App.css';

require('dotenv').config()

function App() {
  // default render <Home/
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}

export default App;
