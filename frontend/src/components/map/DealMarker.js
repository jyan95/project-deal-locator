import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import API from '../../api';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const dealMarker = new L.Icon({
  iconUrl: require('../../assets/redPointer.svg'),
  iconRetinaUrl: require('../../assets/redPointer.svg'),
  popupAnchor: [0,-20],
  iconSize: [15,20]
})

class DealMarker extends React.Component {
  state = {
    deal: this.props.deal,
    address: this.props.deal.merchant.address,
    lat: '',
    lon: '',
    following: false
  }

  followDeal = (deal) => {
    this.setState({following:true});
    this.props.handleClick(deal);
  }

  openDeal = (deal) => {
    return window.open(`${deal.url}`,'_blank');
  }

  componentDidMount(){
    // console.log('deal marker mounting');
    let token = localStorage.getItem('token');
    let { latitude, longitude } = this.props.deal.merchant;
    if (latitude) {
      this.setState({lat:latitude, lon:longitude})
    } else {
      API.getLatLon(this.state.address)
      .then(data => {
        // console.log(data);
        this.setState({
          lat: data.results[0].locations[0].latLng.lat,
          lon: data.results[0].locations[0].latLng.lng
        })
        //, () => this.props.forceUpdate())
      })
    };
    API.getUserDeals(token)
    .then(deals => deals.map(d => {
      if(d.frontend_id === this.state.deal.id){
        return this.setState({following: true});
      } else {
        return null
      }
    }))
  }

  render(){
    // console.log('in deal marker',this.state);
    let { lat, lon, deal } = this.state;
    // debugger
    return(
      <Marker position={[lat,lon]} icon={dealMarker}>
        <Popup>
          <Typography gutterBottom align='center' display='block' variant="body1" component="p">
            {deal.short_title}
          </Typography>
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item sm={6}>
            {!this.state.following ? <Button size="small" variant="outlined" color="primary" onClick={() => this.followDeal(deal)}>
              follow deal
            </Button> : <Button size="small" variant="outlined" color="primary" disabled>
              follow deal
            </Button> }
            </Grid>
            <Grid item sm={6}>
            <Button size="small" variant="outlined" onClick={() => this.openDeal(deal)}>
              open in new tab
            </Button>
            </Grid>
          </Grid>
        </Popup>
      </Marker>
    )
  }
}

export default DealMarker;
