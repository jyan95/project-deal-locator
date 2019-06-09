import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './map.css';
import DealMarker from './DealMarker';
// import DealModal from './DealModal';
import API from '../api';

const MAPTYPE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png';
let LAT = 40.706858499999996; // put user latitude here
let LON = -74.01491589999999; // put user longitude here
const userLocation = [LAT,LON];
let queryPage = 1;


const userIcon = new L.Icon({
  iconUrl: require('../assets/userIcon.png'),
  iconRetinaUrl: require('../assets/userIcon.png'),
  popupAnchor: [10,-44],
  iconSize: [30,30]
})

class HomeMap extends React.Component {
  state = {
    deals: [],
    withAddress: []
  };

  getMoreDeals = (dealsArray) => {
    if (dealsArray.length < 20) {
      queryPage++;
      API.getDeals(LAT,LON,queryPage)
      .then(console.log)
      // .then(data => {
      //   data.deals.map(d => !!d.deal.merchant.address ? dealsArray.push(d) : this.getMoreDeals(dealsArray))
      //   return dealsArray;
      // });
      console.log('in get more deals function',dealsArray);
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position => {
      this.setState({
        userLat: position.coords.latitude,
        userLon: position.coords.longitude
      })
    }));
    // console.log('from home.js', navigator.geolocation);
    // API.getDeals(this.state.userLat,userLon)
    API.getDeals(LAT,LON,queryPage)
    .then(data => this.setState({deals: data.deals}))
    .catch(err => console.log(err));
  }

  renderUserLocation = () => {
    // console.log('rendering user');
    const userLocation = [LAT,LON];
    return <Marker position={userLocation} icon={userIcon}/>
  }

  renderDealLocations = () => {
    // console.log('deals with address', this.state.withAddress);
    // let dealsWithAddress = this.state.deals.filter(d => !!d.deal.merchant.address);
    let dealsWithAddress = this.state.deals.filter(d => !!d.deal.merchant.address);
    // this.getMoreDeals(dealsWithAddress);
    // console.log('after getMoreDeals',dealsWithAddress);

    // console.log('deals with address',dealsWithAddress);
    return dealsWithAddress.map(d => <DealMarker key={d.deal.id} deal={d.deal}/>)
    // return(
    //   <Marker position={[40.707,-74.018]}>
    //     <Popup>
    //       Deal
    //       <br/>
    //       <button onclick={() => this.props.handleClick()}>
    //         See details
    //       </button>
    //     </Popup>
    //   </Marker>
    // )
  }

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
