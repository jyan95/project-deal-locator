import React from 'react';
import Map from '../components/map/Map';
// import API from '../api';
// import './Home.css';

function Home() {
  // getUserLocation = () => {
  //   if ('geolocation' in navigator) {
  //     // console.log('fetching location');
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.setState({ position })
  //       console.log('in home.js',this.state);
  //     });
  //   } else {
  //     console.log('geolocation is not available');
  //   }
  // }

  // componentDidMount(){
  //   const token = localStorage.getItem('token');
  //   if (!!token) {
  //     API.getUser(token)
  //     .then(user => {
  //       this.setState({
  //         loggedIn: true,
  //         currentUser: user
  //       })
  //       // console.log(this.state)
  //     })
  //   };
  //   this.getUserLocation();
  // }
  return (
    <div id='homepage'>
      <Map />
    </div>
  )
}

export default Home;
