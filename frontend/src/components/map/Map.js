import React from 'react';
import { Redirect } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import './Map.css';
import DealMarker from './DealMarker';
import UserAddedDealMarker from './UserAddedDealMarker';
import AddDealForm from './AddDealForm';
// import UserMarker from './UserMarker';
import API from '../../api';

import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const MAPTYPE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png';

let token = localStorage.getItem('token');
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
    displayModal: false,
    displayTooltip: 0
  };

  handleAPIDealClick = (deal) => {
    console.log('u adding:',deal);
    // const token = localStorage.getItem('token');
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
    console.log(this.state.displayTooltip)
    if(!!token){
      this.setState({addDealMode: !this.state.addDealMode});
      this.setState({displayTooltip: this.state.displayTooltip +1})
    } else {
      // debugger
      this.setState({redirect:true})
    }
  }

  toggleModal = () => {
    this.setState({displayModal: !this.state.displayModal})
  }

  closeTooltip = () => {
    this.setState({displayTooltip: this.state.displayTooltip +1})
  }

  handleMapClick = (e) => {
    // console.log(e);
    this.setState({clickLat:e.latlng.lat, clickLon:e.latlng.lng});
    this.toggleModal();
    // console.log(this.state)
  }

  addDeal = (formData) => {
    // console.log('adding deal', formData);
    // const token = localStorage.getItem('token');
    if(!!token){
      API.addDealToMap(token, formData, this.state.clickLat, this.state.clickLon).then(this.getUserAddedDeals());
      this.toggleModal();
      this.toggleMode();
    } else {
      alert('please log in!')
    }
  }

  redirect = () => {
    if(this.state.redirect){
      return <Redirect to='/login' />
    }
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
              {!!token ? !this.state.addDealMode ? 'add deal' : 'exit' : 'sign in'}
            </Fab>
          </div>
          <Dialog
            open={this.state.displayModal}
            onClose={this.toggleModal}
          >
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
