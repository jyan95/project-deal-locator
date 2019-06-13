import React from 'react';
import DealCard from '../components/DealCard';
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

  renderDeals = () => {
    this.state.userDeals.map(deal => {

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
    // console.log(this.state.deals);
    return(
      <div id='deals-container'>
        <h1>ALL DEALS</h1>
        <GridList cellHeight={300} cols={3}>
          {this.state.userDeals.map(d => {
            return (
              <GridListTile>
                <DealCard deal={d}/>
              </GridListTile>
            )
          })}
        </GridList>
      </div>
    )
  }
}

export default UserDeals;
