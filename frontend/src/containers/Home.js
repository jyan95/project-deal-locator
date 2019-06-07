import React from 'react';
import Map from '../components/Map';
import API from '../api';

// import './Home.css';

class Home extends React.Component {
  state = {
    deals: [],
    userLat: '',
    userLon: ''
  };

  getCoords() {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem(`latitude`, position.coords.latitude);
        localStorage.setItem(`longitude`, position.coords.longitude);
      },
      (error) => {
        this.setState({
          error: error.message,
        });
      });
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position => {
      this.setState({
        userLat: position.coords.latitude,
        userLon: position.coords.longitude
      })
    }));
    // console.log('from home.js', navigator.geolocation);
    // API.getDeals(this.state.userLat,userLon)
    API.getDeals(40.706858499999996,-74.01491589999999)
    .then(data => this.setState({deals: data.deals}))
    .catch(err => console.log(err));
  }

  render() {
    // console.log(this.state.deals);
    return (
      <div id='homepage'>
        <Map deals={this.state.deals}/>
      </div>
    )
  }
}

export default Home;
