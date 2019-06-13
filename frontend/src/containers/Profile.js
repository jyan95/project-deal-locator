import React from 'react';
// import './Categories.css';
import API from '../api';
import Login from '../components/Login';
import UserDeals from './UserDeals';

import Button from '@material-ui/core/Button';

// index page for all categories
class Profile extends React.Component {
  state = {
    loggedIn: false
  };

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

  login = (formData) => {
    // console.log('logging in', formData);
    API.login(formData)
    .then(data => {
      const { token, user } = data;
      localStorage.setItem('token', token);
      this.setState({currentUser: user, loggedIn: true})
    })
  }

  logout = () => {
    localStorage.clear();
    this.setState({loggedIn: false, currentUser: null});
  }

  render(){
    return(
      <div id='deals'>
        {!this.state.loggedIn ? <Login login={this.login}/> : <UserDeals />}
        <br/>
        <br/>
        <br/>
        <br/>
        {this.state.loggedIn ? <Button variant="contained" color="primary" onClick={this.logout}>
          Logout
        </Button> : null }
      </div>
    )
  }
}

export default Profile;
