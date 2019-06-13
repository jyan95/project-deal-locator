import React from 'react';
import API from '../api';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import DealCard from '../components/cards/DealCard';
import DealCard from '../components/cards/Card';


// deals index
class DealsContainer extends React.Component {
  state = {
    deals: [],
    category:''
  };

  componentDidMount(){
    let queryPage = 1;
    while(queryPage < 5){
      API.getCategory(this.props.match.params.slug,queryPage)
      .then(data => this.setState({deals: this.state.deals.concat(data.deals)}))
      queryPage++;
    };
  }

  render(){
    // console.log(this.props);
    return(
      <div id='deals-container'>
        <h1><br/>{this.props.match.params.slug.split('').includes('-') ? this.props.match.params.slug.replace('-',' & ').toUpperCase() : this.props.match.params.slug.toUpperCase()}</h1>
        <GridList cellHeight={155} cols={1}>
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

export default DealsContainer;
