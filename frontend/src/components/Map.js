import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import DealMarker from './DealMarker';
import './map.css';
import DealModal from './DealModal';
import API from '../api';

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
  state = {
    deals: this.props.deals
  };

  // componentDidMount(){
  //   const dealsWithAddress = this.state.deals.filter(d => !!d.deal.merchant.address);
  //   dealsWithAddress.map(d => {
  //     let lat = '';
  //     let lon = '';
  //     let { merchant, short_title, discount_percentage } = d.deal;
  //     API.getLatLon(merchant.address.replace(/\s/g, ''))
  //     .then(data => {
  //       lat = data.results[0].locations[0].latLng.lat;
  //       lon = data.results[0].locations[0].latLng.lng;
  //       console.log(lat)
  //       console.log(d)
  //
  //       return (
  //         this.renderDealLocations(d,lat,lon)
  //         // <Marker position={[lat,lon]}>
  //         //   <Popup>
  //         //     {short_title}
  //         //     <br/>
  //         //     <button onclick={() => this.handleDealClick(d.deal)}>
  //         //       See details
  //         //     </button>
  //         //   </Popup>
  //         // </Marker>
  //       )
  //     })
  //   })
  // }

  renderUserLocation = () => {
    const userLocation = [LAT,LNG];
    return <Marker position={userLocation} icon={userIcon}/>
  }

  renderDealLocations = () => {
    let dealsWithAddress = this.state.deals.filter(d => !!d.deal.merchant.address);
    dealsWithAddress.map(d => <DealMarker deal={d}/>)
  }
  //
  // renderDealLocations = (d, lat,lon) => {
  //   let { short_title } = d.deal;
  //   return(
  //     <Marker position={[lat,lon]}>
  //       <Popup>
  //         {short_title}
  //         <br/>
  //         <button onclick={() => this.handleDealClick(d.deal)}>
  //           See details
  //         </button>
  //       </Popup>
  //     </Marker>
  //   )

    // console.log('render deals function',this.props.deals);
    // let lat = '';
    // let lon = '';
    // console.log('deals with locations:', dealsWithAddress);


    // this.props.deals.map(d => {
    //   let { merchant, short_title, discount_percentage } = d.deal;
    //
    //   if (merchant.latitude) {
    //     lat = merchant.latitude;
    //     lon = merchant.longitude;
    //   } else if (merchant.address) {
    //     API.getLatLon(merchant.address.replace(/\s/g, ''))
    //     .then(data => console.log('lat', data.results[0].locations[0].latLng.lat))
    //     // .then(data => {
    //     //   lat = data.results[0].locations[0].latLng.lat;
    //     //   lon = data.results[0].locations[0].latLng.lng;
    //     // })
    //   };
    //
    //   // console.log('lat:', lat);
    //   // console.log('lon:', lon);
    //
    //   return (
    //     <Marker position={[lat,lon]}>
    //       <Popup>
    //         {short_title}
    //         <br/>
    //         <button onclick={() => this.handleDealClick(d.deal)}>
    //           See details
    //         </button>
    //       </Popup>
    //     </Marker>
    //   )
    // });//end of map
  // }

  render(){
    // console.log(this.props.deals);
    // {this.renderDealLocations()}
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
          {this.renderDealLocations()}
        </Map>
      </div>
    )
  }
}

export default HomeMap;
