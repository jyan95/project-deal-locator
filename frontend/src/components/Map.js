import React from 'react';
import './Map.css';

class Map extends React.Component {
  render(){
    // initialize map and set view to chosen lat long and zoom level
    let map = L.map('map').setView([40,73], 13);
    // all mouse and touch are enabled by default
    return(
      <div id='map'>
      </div>
    )
  }
}

export default Map;
