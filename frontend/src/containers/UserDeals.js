import React from 'react';
// import './Categories.css';
import API from '../api';
import Login from '../components/Login';

// index page for all categories
class UserDeals extends React.Component {
  state = {
    loggedIn: false
  };

  // componentDidMount() {
  //   const token = localStorage.getItem("token")
  //   console.log('token is', token);
  //   if(token) {
  //     API.getUser(token)
  //     .then(user => {
  //       if(!user.error) {
  //         this.setState({currentUser: user})
  //         console.log('current user:', user);
  //         // this.setState({loggedIn:true})
  //         console.log(this.state);
  //       } else {
  //         console.log(user.error);
  //       }
  //     })
  //   }
  // }

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

export default UserDeals;
