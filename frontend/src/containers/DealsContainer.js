import React from 'react';
import API from '../api';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
        <GridList cellHeight={300} cols={3}>
          {this.state.deals.map(d => {
            return (
              <GridListTile key={d.deal.id}>
                <DealCard deal={d.deal}/>
              </GridListTile>
            )
          })}
        </GridList>
      </div>
    )
  }
}

export default DealsContainer;
