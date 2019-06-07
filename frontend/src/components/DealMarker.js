import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import API from '../api';

class DealMarker extends React.Component {
  state = {
    deal: this.props.deal,
    address: this.props.deal.merchant.address,
    lat: '',
    lon: ''
  }

  componentDidMount(){
    console.log('deal marker mounting');
    API.getLatLon(this.state.address)
    .then(data => {
      // console.log(data);
      this.setState({
        lat: data.results[0].locations[0].latLng.lat,
        lon: data.results[0].locations[0].latLng.lng
      })
    })
  }

  render(){
    console.log('in deal marker',this.state);
    let { lat, lon, deal } = this.state;
    let loading = !lat || !lon;

    if(loading) return null;

    return(
      <Marker position={[lat,lon]}>
        <Popup>
          {deal.short_title}
          <br/>
          <button onclick={() => this.props.handleClick(deal)}>
            See details
          </button>
        </Popup>
      </Marker>
    )
  }
}

export default DealMarker;
