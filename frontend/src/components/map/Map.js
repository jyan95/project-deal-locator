import React from 'react';
import { Redirect } from 'react-router-dom';
import L from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';
import DealMarker from './DealMarker';
import UserAddedDealMarker from './UserAddedDealMarker';
import AddDealForm from './AddDealForm';
import API from '../../api';
import { lat , lon } from '../../App';

import './Map.css';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const MAPTYPE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png';

const userIcon = new L.Icon({
  iconUrl: require('../../assets/userIcon.png'),
  iconRetinaUrl: require('../../assets/userIcon.png'),
  popupAnchor: [10,-44],
  iconSize: [30,30]
})

let token = localStorage.getItem('token');

class HomeMap extends React.Component {
  state = {
    APIdeals: [],
    userAddedDeals: [],
    addDealMode: false,
    displayModal: false,
    displayTooltip: 0
  };

  handleAPIDealClick = (deal) => {
    // console.log('u adding:',deal);
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
    .then(data => data.map(d => {
      return this.setState({userAddedDeals: [...this.state.userAddedDeals, d]})
    }))
  }

  getLocationAndDeals = () => {
    if ('geolocation' in navigator) {
      // console.log('fetching location');
      navigator.geolocation.getCurrentPosition((position) => {
        this.getDeals(position);
      });
    } else {
      console.log('geolocation is not available');
    }
  }

  // MULTI PAGE QUERY
  componentDidMount(){
    this.getLocationAndDeals();
    // switch off during dev
    this.getUserAddedDeals();
    // console.log( lat, lon );
  }

  renderUserLocation = () => {
    // console.log('in render user location fn:', latitude);
    return <Marker position={[lat,lon]} icon={userIcon}/>
  }

  renderAPIDeals = () => {
    // console.log('rendering deals');
    return this.state.APIdeals.map(d => <DealMarker key={d.deal.id} deal={d.deal} handleClick={this.handleAPIDealClick}/>)
  }

  renderUserAddedDeals = () => {
    return this.state.userAddedDeals.map(d => <UserAddedDealMarker key={d.id} deal={d} currentUserToken={token}/>)
  }

  toggleMode = (e) => {
    if(!!token){
      this.setState({addDealMode: !this.state.addDealMode});
      this.setState({displayTooltip: this.state.displayTooltip +1})
    } else {
      // debugger
      this.setState({redirect:true})
    };
  }

  toggleModal = () => {
    this.setState({displayModal: !this.state.displayModal});
  }

  closeTooltip = () => {
    this.setState({displayTooltip: this.state.displayTooltip +1});
  }

  mapClick = (e) => {
    this.setState({clickLat:e.latlng.lat, clickLon:e.latlng.lng});
    this.toggleModal();
    // console.log(this.state)
  }

  addDeal = (formData) => {
    // console.log('adding deal', formData);
    // const token = localStorage.getItem('token');
    if(!!token){
      API.addDealToMap(token, formData, this.state.clickLat, this.state.clickLon).then(this.getUserAddedDeals);
      this.toggleModal();
      // this.toggleMode();
    } else {
      alert('please log in!');
    };
  }

  redirect = () => {
    if(this.state.redirect){
      return <Redirect to='/login' />
    };
  }

  render(){

    return(
      <div>
        <div style={{
          zIndex: 9999,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'flex-end',
          top: 10,
          right: 10
        }}>
          <Fab id='fab' variant='extended' color="primary" aria-label="Add" size='medium' onClick={this.toggleMode} >
            {!!token ? !this.state.addDealMode ? 'add deal' : 'exit' : 'sign in'}
          </Fab>
        </div>
        <Map id='map' center={[lat,lon]} zoom={16} onClick={this.state.addDealMode ? this.mapClick : null} >
          <TileLayer
            attribution={MAPTYPE_URL}
            url={MAPTYPE_URL}
            maxZoom='18'
            minZoom='14'
          />
          <Dialog open={this.state.displayModal} onClose={this.toggleModal}>
            <AddDealForm submitForm={this.addDeal}/>
          </Dialog>
          <Dialog
            open={this.state.displayTooltip === 1}
            onClose={this.closeTooltip}
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Select a point on the map to add a deal!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeTooltip} color="primary">
                got it
              </Button>
            </DialogActions>
          </Dialog>
          {this.renderUserLocation()}
          {this.renderAPIDeals()}
          {this.renderUserAddedDeals()}
        </Map>
        {this.redirect()}
      </div>
    )
  }
}

export default HomeMap;
