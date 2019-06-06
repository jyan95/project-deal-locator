import React from 'react';
import API from '../api';
import DealCard from '../components/DealCard';

// deals index
class DealsContainer extends React.Component {
  state = {
    deals: []
  }

  componentDidMount(){
    API.getCategory(this.props.match.params.slug)
    .then(data => this.setState({deals: data.deals}))
  }

  render(){
    // console.log(this.state.deals);
    return(
      <div id='deals-container'>
        <h1>ALL DEALS</h1>
        {this.state.deals.map(d => <DealCard deal={d.deal}/>)}
      </div>
    )
  }
}

export default DealsContainer;
