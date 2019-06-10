import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import DealMarker from './DealMarker';

// for map filter
// import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import DealModal from './DealModal';
import API from '../api';

const MAPTYPE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png';

let LAT = 40.706858499999996; // put user latitude here
let LON = -74.01491589999999; // put user longitude here
let userLocation = [LAT,LON];


const userIcon = new L.Icon({
  iconUrl: require('../assets/userIcon.png'),
  iconRetinaUrl: require('../assets/userIcon.png'),
  popupAnchor: [10,-44],
  iconSize: [30,30]
})

class HomeMap extends React.Component {
  state = {
    deals: [],
    filter: 'All',
    filteredDeals: []
  };

  // SINGLE PAGE QUERY
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition((position => {
  //     this.setState({
  //       userLat: position.coords.latitude,
  //       userLon: position.coords.longitude
  //     })
  //   }));
  //   // console.log('from home.js', navigator.geolocation);
  //   // API.getDeals(this.state.userLat,userLon)
  //   API.getDeals(LAT,LON,queryPage)
  //   .then(data => this.setState({deals: data.deals}))
  //   .catch(err => console.log(err));
  // }
  // SINGLE PAGE QUERY

  // MULTI PAGE QUERY
  componentDidMount(){
    let queryPage = 1;
    while(queryPage < 20){
      queryPage++;
      API.getDeals(LAT,LON,queryPage)
      .then(data => this.setState({deals: this.state.deals.concat(data.deals.filter(d => !!d.deal.merchant.address))}))
    };
  }
  // MULTI PAGE QUERY

  renderUserLocation = () => {
    // console.log('rendering user');
    return <Marker position={userLocation} icon={userIcon}/>
  }

  renderAllDeals = () => {
    // console.log('rendering deals');
    return this.state.deals.map(d => <DealMarker key={d.deal.id} deal={d.deal} handleClick={this.handleClick}/>)
  }

  renderFilteredDeals = () => {
    let queryPage = 1;
    while(queryPage < 10){
      queryPage++;
      API.getCategory(this.state.filter,queryPage)
      .then(data => this.setState({filteredDeals: this.state.filteredDeals.concat(data.deals.filter(d => !!d.deal.merchant.address))}))
    };
    return this.state.filteredDeals.map(d => <DealMarker key={d.deal.id} deal={d.deal} handleClick={this.handleClick}/>)
  }


  render(){
    // console.log(this.props.deals);

    return(
      <div>
        <Map id='map' center={userLocation} zoom={16} >
          <TileLayer
            attribution={MAPTYPE_URL}
            url={MAPTYPE_URL}
            maxZoom='18'
            minZoom='14'
          />
          {this.renderUserLocation()}
          {this.state.filter === 'All' ? this.renderAllDeals() : this.renderFilteredDeals()}
        </Map>
      </div>
    )
  }
}

export default HomeMap;
