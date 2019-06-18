import React from 'react';
// import './Categories.css';
// import API from '../api';
import Login from '../components/Login';
import UserDeals from './UserDeals';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

let token = localStorage.getItem('token');

// index page for all categories
class Basket extends React.Component {
  state = {
    loggedIn: !!token
  };

  // componentDidMount(){
  //   // console.log('hello', this.state);
  //   // let token = localStorage.getItem('token');
  //   if (!!token) {
  //     // console.log('mounting',this.state);
  //     API.getUser(token)
  //     .then(user => {
  //       // alert(user);
  //       this.setState({
  //         loggedIn: true,
  //         currentUser: user
  //       })
  //     })
  //   };
  // }

  // login = (formData) => {
  //   // console.log('logging in', formData);
  //   API.login(formData)
  //   .then(data => {
  //     console.log("data", data);
  //     const { token, user } = data;
  //     localStorage.setItem('token', token);
  //     this.setState({currentUser: user, loggedIn: true})
  //   })
  // }

  logout = () => {
    localStorage.clear();
    this.setState({loggedIn: false, currentUser: null});
  }

  render(){
    return(
      <Container>
        <br/>
        <br/>
        <Typography variant='h6' component='h1' align='center'>
          {this.state.loggedIn ? `YOUR DEALS` : `Please sign in to see your deals`}
        </Typography>
        {this.state.loggedIn ? <UserDeals /> : <Login login={this.login}/>}
        {this.state.loggedIn ? <Button variant="contained" color="primary" onClick={this.logout}>
          Logout
        </Button> : null }
        <br/>
        <br/>
        <br/>
        <br/>
      </Container>
    )
  }
}

export default Basket;
