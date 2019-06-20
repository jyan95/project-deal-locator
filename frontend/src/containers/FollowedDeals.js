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

  render(){
    return(
      <Container>
        <br/>
        <br/>
        <Typography variant='h6' component='h1' align='center'>
          {this.state.loggedIn ? `YOUR DEALS` : `Please sign in to see your deals`}
        </Typography>
        <Typography variant='body2' component='p' align='center'>
          {this.state.loggedIn ? `(click deal title to open in new tab)` : `Please sign in to see your deals`}
        </Typography>
        {this.state.loggedIn ? <UserDeals /> : <Login login={this.login}/>}
      </Container>
    )
  }
}

export default FollowedDeals;
