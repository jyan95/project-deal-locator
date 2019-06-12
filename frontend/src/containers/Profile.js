import React from 'react';
// import './Categories.css';
import API from '../api';
import Login from '../components/Login';

// index page for all categories
class Profile extends React.Component {
  state = {
    loggedIn: false
  };

  componentDidMount(){
    const token = localStorage.getItem('token');
    console.log(token)
    API.getUser(token)
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

  render(){
    return(
      <div id='deals'>
        {!this.state.loggedIn ? <Login login={this.login}/> : <h1>Your Deals</h1>}
      </div>
    )
  }
}

export default Profile;
