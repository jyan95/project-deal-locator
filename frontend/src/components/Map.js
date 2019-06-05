import React from 'react';
// import './Map.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const MAPTYPE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png';
let LAT = 40.706858499999996; // put user latitude here
let LNG = -74.01491589999999; // put user longitude here

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  /* border-style: dotted; */
`;

class Map extends React.Component {

  buildMap = (x,y) => {
    document.getElementById('map').innerHTML="";

    this.map = new L.map('map');
    let layer = new L.TileLayer(MAPTYPE_URL, {
      maxZoom: 18,
      minZoom: 15,
    });
    this.map.setView(new L.LatLng(x,y), 18);
    this.map.addLayer(layer);
  }

  componentDidMount(){
    // console.log('building map');
    this.buildMap(LAT,LNG);
    // console.log(this.map);
  }

  render(){
    return(
      <Wrapper width='90vw' height='70vh' id='map'/>
    )
  }
}

export default Map;
