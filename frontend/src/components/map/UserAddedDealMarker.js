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

class UserAddedDealMarker extends React.Component {
  state = { deal: this.props.deal, currentUserId: null, removed: false };

  componentDidMount() {
    // console.log(this.props)
    if(!!this.props.currentUserToken){
      API.getUser(this.props.currentUserToken)
      .then(user => this.setState({currentUserId:user.id}))
    }
  }

  removeDeal = (id) => {
    API.deleteAddedDeal(id);
    this.setState({removed:true});
  }

  render(){
    let { latitude, longitude, short_title, description, user_id } = this.state.deal
    // console.log('in added deal marker',this.state);
    // debugger
    return(
      <div>
        {this.state.removed ? null :
        <Marker position={[latitude,longitude]} icon={dealMarker}>
          <Popup>
            <Typography gutterBottom align='center' display='block' variant="body1" component="p">
              {short_title}
            </Typography>
            <Typography gutterBottom align='center' display='block' variant="body2" component="p">
              {description}
            </Typography>
              {user_id === this.state.currentUserId ?
                <Grid container direction="row" justify="center" alignItems="center">
                  <Button size="small" variant="outlined" color="secondary" onClick={() => this.removeDeal(this.state.deal.id)}>
                    remove
                  </Button>
                </Grid>
              :
              null }
          </Popup>
        </Marker>}
      </div>
    )
  }
}

export default UserAddedDealMarker;
