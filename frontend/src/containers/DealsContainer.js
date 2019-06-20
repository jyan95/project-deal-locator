import React from 'react';
import DealCard from '../components/cards/Card';
import API from '../api';
// import { lat , lon } from '../App';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

let token = localStorage.getItem('token');

class DealsContainer extends React.Component {
  state = {
    deals: [],
    userDeals: [],
    category:'',
    loggedIn: !!token
  };

  componentDidMount(){
    const token = localStorage.getItem('token');
    let queryPage = 1;
    while(queryPage < 5){
      API.getCategoryDeals(this.props.match.params.slug,queryPage)
      .then(data => this.setState({deals: this.state.deals.concat(data.deals)}));
      queryPage++;
      // console.log(queryPage);
    };
    // this.autoLogin();
    if (this.state.loggedIn) {
      API.getUserDeals(token)
      .then(deals => {
        // console.log('GIVE ME SOME DEALS', deals);
        this.setState({userDeals: deals})
      })
    }
  }

  filteredDeals = () => {
    return this.state.deals.filter(dealObject => {
      const frontendIds = this.state.userDeals.map(ud=> ud.frontend_id)
      // console.log(frontendIds);
      return !frontendIds.includes(dealObject.deal.id)
    })
  }

  render(){
    // console.log(this.state);
    let { slug } = this.props.match.params;
    // console.log(this.state)
    // console.log(this.filteredDeals())
    return(
      <Container>
        <br/>
        <Typography variant='h5' component='h1' align='center'>
          {slug.split('').includes('-') ? slug.replace('-',' & ').toUpperCase() : slug.split('').includes('_') ? slug.replace('_',' & ').toUpperCase() : slug.toUpperCase()}
        </Typography>
        <br/>
        <GridList cellHeight='auto' cols={1}>
          {this.state.loggedIn ? this.filteredDeals().map(d => {
            // console.log(d)
            return (
              <GridListTile key={d.deal.id}>
                <DealCard
                  deal={d.deal}
                  loggedIn={this.state.loggedIn}
                />
              </GridListTile>
            )
          }) : this.state.deals.map(d => {
            // console.log(d)
            return (
              <GridListTile key={d.deal.id}>
                <DealCard
                  deal={d.deal}
                  loggedIn={this.state.loggedIn}
                  followClick={this.followClick}
                />
              </GridListTile>
            )
          })}
        </GridList>
        <br/>
        <br/>
        <br/>
      </Container>
    )
  }
}

export default DealsContainer;
