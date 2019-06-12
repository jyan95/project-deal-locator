import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import API from '../../api';

const userIcon = new L.Icon({
  iconUrl: require('../../assets/userIcon.png'),
  iconRetinaUrl: require('../../assets/userIcon.png'),
  popupAnchor: [10,-44],
  iconSize: [30,30]
})

const UserMarker = (props) => {
  let { latitude, longitude } = props.position.coords;
  return(
    <Marker position={[latitude,longitude]} icon={userIcon}/>
  )
}

export default UserMarker;
