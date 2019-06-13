import React from 'react';
import UserDealCard from '../components/cards/UserDealCard';
import API from '../api';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// user's deal index
class UserDeals extends React.Component {
  state = {
    userDeals: []
  }

  fetchDeal = (id) => {
    API.getDeal(id)
    .then(data => {
      this.setState({
        userDeals: [...this.state.userDeals, data.deal]
      });
      // console.log('state after fetches:', this.state.userDeals);
    })
  }

  componentDidMount(){
    const token = localStorage.getItem('token');
    API.getUserDeals(token)
    .then(data => data.map(d => {
      this.fetchDeal(d.deal_id)
    }))
  }

  render(){
    // console.log(this.state.userDeals);
    return(
      <div id='user-deals-container'>
        <h1>YOUR DEALS</h1>
          {this.state.userDeals.map(d => {
            return <UserDealCard deal={d}/>
          })}
      </div>
    )
  }
}

export default UserDeals;
