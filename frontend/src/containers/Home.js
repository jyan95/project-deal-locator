import React from 'react';
import Map from '../components/Map';

// import './Home.css';

class Home extends React.Component {
  render(){

    return(
      <React.Fragment>
      <div id='homepage'>
        <div id='map-container'>
          <Map />
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Home;
