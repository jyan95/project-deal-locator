import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import DealMarker from './DealMarker';
import UserAddedDealMarker from './UserAddedDealMarker';
import AddDealForm from './AddDealForm';
// import UserMarker from './UserMarker';
import API from '../../api';

import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';

const MAPTYPE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png';

let lat = 40.706858499999996;
let lon = -74.01491589999999;
let userLocation = [lat,lon];

const userIcon = new L.Icon({
  iconUrl: require('../../assets/userIcon.png'),
  iconRetinaUrl: require('../../assets/userIcon.png'),
  popupAnchor: [10,-44],
  iconSize: [30,30]
})

class HomeMap extends React.Component {
  state = {
    APIdeals: [],
    userAddedDeals: [],
    addDealMode: false,
    displayModal: false
  };

  handleAPIDealClick = (deal) => {
    console.log('u adding:',deal);
    const token = localStorage.getItem('token');
    API.addUserDeal(deal.id, token)
  }

  getDeals = (position) => {
    let queryPage = 1;
    let { latitude, longitude } = position.coords;
    while(queryPage < 20){
      queryPage++;
      API.getDeals(latitude,longitude,queryPage)
      .then(data => this.setState({APIdeals: this.state.APIdeals.concat(data.deals.filter(d => !!d.deal.merchant.address))}))
    };
  }

  getUserAddedDeals = () => {
    API.getUserAddedDeals()
    .then(data => this.setState({userAddedDeals: this.state.userAddedDeals.concat(data)}));
  }

  getLocationAndDeals = () => {
    if ('geolocation' in navigator) {
      // console.log('fetching location');
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ position });
        this.getDeals(position);
      });
    } else {
      console.log('geolocation is not available');
    }
  }

  // MULTI PAGE QUERY
  componentDidMount(){
    // this.getLocationAndDeals();
    this.getUserAddedDeals();
    // switch off during dev
  }
  // MULTI PAGE QUERY

  renderUserLocation = () => {
    // return <UserMarker position={this.state.position} />
    // let { latitude, longitude } = this.state.position.coords;
    // console.log('in render user location fn:', latitude);
    return <Marker position={userLocation} icon={userIcon}/>
  }

  renderAPIDeals = () => {
    // console.log('rendering deals');
    return this.state.APIdeals.map(d => <DealMarker key={d.deal.id} deal={d.deal} handleClick={this.handleAPIDealClick}/>)
  }

  renderUserAddedDeals = () => {
    return this.state.userAddedDeals.map(d => <UserAddedDealMarker key={d.id} deal={d}/>)
  }

  toggleMode = () => {
    this.setState({addDealMode: !this.state.addDealMode});
  }

  toggleModal = () => {
    this.setState({displayModal: !this.state.displayModal})
  }

  handleMapClick = (e) => {
    console.log(e);
    this.setState({clickLat:e.latlng.lat, clickLon:e.latlng.lng});
    this.toggleModal();
    // console.log(this.state)
  }

  addDeal = (formData) => {
    console.log('adding deal', formData);
    const token = localStorage.getItem('token');
    if(!!token){
      API.addDealToMap(token, formData, this.state.clickLat, this.state.clickLon);
      this.toggleModal();
      this.toggleMode();
    } else {
      alert('please log in!')
    }
    this.getUserAddedDeals();
  }

  render(){
    // console.log('map props',this.props);
    // {this.state.filter === 'All' ? this.renderAllDeals() : this.renderFilteredDeals()}
    return(
      <div>
        <Map id='map' center={userLocation} zoom={16} onClick={this.state.addDealMode ? this.handleMapClick : null}>
          <TileLayer
            attribution={MAPTYPE_URL}
            url={MAPTYPE_URL}
            maxZoom='18'
            minZoom='14'
          />
          <div style={{
            zIndex: 9999,
            position: 'relative',
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 10,
            marginRight: 10
          }}>
            <Fab variant='extended' color="primary" aria-label="Add" size='medium' onClick={this.toggleMode} >
              {!this.state.addDealMode ? 'add deal' : 'exit'}
            </Fab>
          </div>
          <Dialog
            open={this.state.displayModal}
            onClose={this.toggleModal}
          >
            <AddDealForm submitForm={this.addDeal}/>
          </Dialog>
          {this.renderUserLocation()}
          {this.renderAPIDeals()}
          {this.renderUserAddedDeals()}
        </Map>
      </div>
    )
  }
}

export default HomeMap;
