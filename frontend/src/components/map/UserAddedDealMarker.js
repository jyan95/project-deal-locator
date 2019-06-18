import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const dealMarker = new L.Icon({
  iconUrl: require('../../assets/redPointer.svg'),
  iconRetinaUrl: require('../../assets/redPointer.svg'),
  popupAnchor: [0,-20],
  iconSize: [15,20]
})

class UserAddedDealMarker extends React.Component {
  state = {
    deal: this.props.deal,
    lat: this.props.deal.latitude,
    lon: this.props.deal.longitude,
    name: this.props.deal.short_title,
    description: this.props.deal.description
  }

  // componentDidMount(){
  //
  // }

  render(){
    console.log('in added deal marker',this.state);
    // let { short_title, description, latitude, longitude } = this.state.deal;
    // debugger
    return(
      <Marker position={[this.state.lat,this.state.lon]} icon={dealMarker}>
        <Popup>
          <Typography gutterBottom align='center' display='block' variant="body1" component="p">
            {this.state.name}
          </Typography>
          <Typography gutterBottom align='center' display='block' variant="p" component="p">
            {this.state.description}
          </Typography>
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Button size="small" variant="outlined" color="primary" onClick={() => this.openDirections(this.state.deal)}>
              open in google maps
            </Button>
          </Grid>
        </Popup>
      </Marker>
    )
  }
}

export default UserAddedDealMarker;
