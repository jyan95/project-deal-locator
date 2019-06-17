import React from 'react';
import API from '../api';
import DealCard from '../components/cards/Card';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

// deals index
class DealsContainer extends React.Component {
  state = {
    deals: [],
    userDeals: [],
    category:'',
    loggedIn: false
  };

  autoLogin = () => {
    const token = localStorage.getItem('token');
    if (!!token) {
      // console.log('mounting',this.state);
      API.getUser(token)
      .then(user => {
        this.setState({
          loggedIn: true,
          token: token
        })
      })
    };
  }

  followClick = (deal) => {

  }

  componentDidMount(){
    const token = localStorage.getItem('token');
    let queryPage = 1;
    while(queryPage < 5){
      API.getCategory(this.props.match.params.slug,queryPage)
      .then(data => this.setState({deals: this.state.deals.concat(data.deals)}));
      queryPage++;
    };
    this.autoLogin();
    API.getUserDeals(token)
    .then(deals => this.setState({userDeals: deals}))
    // .then(userDeals => userDeals.map(ud => {
    //   return this.setState({deals: this.state.deals.filter(d => d.id !== ud.frontend_id)},() => console.log(this.state));
    // }))
  }

  render(){
    // console.log(this.state);
    let { slug } = this.props.match.params;
    return(
      <Container>
        <br/>
        <Typography variant='h5' component='h1' align='center'>
          {slug.split('').includes('-') ? slug.replace('-',' & ').toUpperCase() : slug.toUpperCase()}
        </Typography>
        <br/>
        <GridList cellHeight='auto' cols={1}>
          {this.state.deals.map(d => {
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
