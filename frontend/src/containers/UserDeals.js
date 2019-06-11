import React from 'react';
// import './Categories.css';
import API from '../api';
import Login from './Login';

// index page for all categories
class UserDeals extends React.Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    const token = localStorage.getItem("token")
    // console.log('token is', token);
    if(token) {
      API.getUser(token)
    }
  }

  login = (username, password) => {
    API.login(username, password)
  }

  render(){
    return(
      <div id='deals'>
        {!this.state.loggedIn ? <Login login={this.login}/> : <h1>Your Deals</h1>}
      </div>
    )
  }
}

export default UserDeals;
