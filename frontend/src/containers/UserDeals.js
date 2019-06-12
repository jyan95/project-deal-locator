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

  componentDidMount(){
    API.getUserDeals(token)
    .then(data => {
      this.setState({userDeals: data.deals})
    })
  }

  render(){
    // console.log(this.state.deals);
    return(
      <div id='deals-container'>
        <h1>ALL DEALS</h1>
        <GridList cellHeight={300} cols={3}>
          {this.state.deals.map(d => {
            return (
              <GridListTile>
                <DealCard deal={d.deal}/>
              </GridListTile>
            )
          })}
        </GridList>
      </div>
    )
  }
}

export default UserDeals;
