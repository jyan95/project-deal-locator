import React from 'react';
import Map from '../components/Map';
import API from '../api';

// import './Home.css';

class Home extends React.Component {
  // getCoords() {
  //   if (window.navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       localStorage.setItem(`latitude`, position.coords.latitude);
  //       localStorage.setItem(`longitude`, position.coords.longitude);
  //     },
  //     (error) => {
  //       this.setState({
  //         error: error.message,
  //       });
  //     });
  //   }
  // }

  componentDidMount(){
    const token = localStorage.getItem('token');
    if (!!token) {
      API.getUser(token)
      .then(user => {
        this.setState({
          loggedIn: true,
          currentUser: user
        })
      })
    }
  }

  render() {
    return (
      <div id='homepage'>
        <Map />
      </div>
    )
  }
}

export default Home;
