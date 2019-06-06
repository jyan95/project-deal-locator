import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import './map.css';
import DealModal from './DealModal';
import API from '../api';
// import styled from 'styled-components';

const MAPTYPE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png';
let LAT = 40.706858499999996; // put user latitude here
let LNG = -74.01491589999999; // put user longitude here
const userLocation = [LAT,LNG];

const userIcon = new L.Icon({
  iconUrl: require('../assets/userIcon.png'),
  iconRetinaUrl: require('../assets/userIcon.png'),
  popupAnchor: [10,-44],
  iconSize: [30,30]
})

class HomeMap extends React.Component {

  geocode = (address) => {
    API.getLatLon(address)
    .then('geocoding',console.log)
  }

  renderUserLocation = () => {
    const userLocation = [LAT,LNG];
    return <Marker position={userLocation} icon={userIcon}/>
  }

  renderDealLocations = () => {
    return this.props.deals.map(d => {
      let { merchant, short_title, discount_percentage } = d.deal;
      this.geocode(merchant.address.replace(/\s/g, ''));
      // let { lat,lng } = data.results[1][0][0].latlng;
      return (
        <Marker key={d.indexOf()}>
          <Popup>
            {short_title}
            <br/>
            <button onclick={() => this.handleDealClick(d.deal)}>
              See details
            </button>
          </Popup>
        </Marker>
      )
    })
  }


  render(){
    console.log(this.props.deals);
    return(
      <div>
        <Map id='map' center={userLocation} zoom={18} >
          <TileLayer
            attribution={MAPTYPE_URL}
            url={MAPTYPE_URL}
            maxZoom='18'
            minZoom='15'
            width='90vw'
          />
          {this.renderUserLocation()}
        </Map>
      </div>
    )
  }
}

export default HomeMap;
