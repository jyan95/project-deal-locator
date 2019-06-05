import React from 'react';
import Navbar from './components/Navbar';

import './App.css';

require('dotenv').config()

function App() {
  // default render <Home/
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
}

export default App;
