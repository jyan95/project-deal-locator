import React from 'react';
import UserDealCard from '../components/cards/UserDealCard';
import API from '../api';

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

  removeDeal = (id) => {
    // console.log('removing deal', id);
    API.removeDeal(id);
  }

  componentDidMount(){
    const token = localStorage.getItem('token');
    API.getUserDeals(token)
    .then(data => data.map(d => {
      // console.log(d);
      return this.fetchDeal(d.frontend_id);
    }));
    if (!!token) {
      // console.log('mounting',this.state);
      API.getUser(token)
      .then(user => {
        this.setState({
          loggedIn: true,
          currentUser: user
        })
      })
    };
  }

  render(){
    // console.log(this.state.userDeals);
    return(
      <div id='user-deals-container'>
        {this.state.userDeals.map(d => {
          return <UserDealCard deal={d} removeClick={this.removeDeal} key={d.id}/>
        })}
      </div>
    )
  }
}

export default UserDeals;
