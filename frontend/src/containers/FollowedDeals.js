import React from 'react';
import Login from '../components/Login';
import UserDeals from './UserDeals';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

let token = localStorage.getItem('token');

class FollowedDeals extends React.Component {
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

  render(){
    return(
      <Container>
        <br/>
        <br/>
        <Typography variant='h6' component='h1' align='center'>
          {this.state.loggedIn ? `YOUR DEALS` : `Please sign in to see your deals`}
        </Typography>
        {this.state.loggedIn ? <UserDeals /> : <Login login={this.login}/>}
      </Container>
    )
  }
}

export default FollowedDeals;
